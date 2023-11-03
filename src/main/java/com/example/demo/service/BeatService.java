//
// Source code recreated from a .class file by IntelliJ IDEA
// (powered by FernFlower decompiler)
//

package com.example.demo.service;

import com.example.demo.dto.*;
import com.example.demo.entity.*;
import com.example.demo.repository.BeatRepository;
import com.example.demo.repository.GenreRepository;
import com.example.demo.repository.UserRepository;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.*;

@Service
public class BeatService {

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private BeatRepository beatRepository;
    @Autowired
    private GenreRepository genreRepository;
    @Autowired
    private OrderService orderService;
    @Autowired
    private GoogleCloudService service;

    private String extractObjectNameFromUrl(String fullUrl) {
        if (fullUrl.startsWith("https://storage.googleapis.com/mychordproject/")) {
            int startIndex = "https://storage.googleapis.com/mychordproject/".length();
            return fullUrl.substring(startIndex);
        }
        return null;
    }

    private void setPathAndName(String path, String pathDemo, String fileName, String fileNameDemo, Beat beat){
        beat.setBeatSoundFull(path);
        beat.setBeatSoundDemo(pathDemo);
        beat.setObjectName(fileName);
        beat.setObjectNameDemo(fileNameDemo);
        this.beatRepository.save(beat);
    }

    private UserResponeDTO getUser(User user){
        return new UserResponeDTO(user.getId(), user.getFullName(), user.getPhoneNumber(), user.getMail());
    }
    private Set<Genre> genreSet(BeatDTO beatDTO) {
        Set<Genre> genres = new HashSet<>();
        for (String genreName : beatDTO.getGenres()) {
            Genre genre = this.genreRepository.findByName(genreName);
            if (genre != null) {
                genres.add(genre);
            }
        }
        return genres;
    }

    private List<GenreResponseDTO> getGenres(Long id) {
        List<String> genres = this.genreRepository.findByBeats(id);
        if (genres.isEmpty()) {
            return null;
        } else {
            List<GenreResponseDTO> genreList = new ArrayList<>();
            for (String value : genres) {
                Genre genre = this.genreRepository.findByName(value);
                genreList.add(new GenreResponseDTO(genre.getId(), genre.getName()));
            }
            return genreList;
        }
    }

    @Nullable
    private List<BeatResponseDTO> getBeatResponseDTOS(List<Beat> beats) {
        if(beats.isEmpty()){
            return null;
        }else {
            List<BeatResponseDTO> beatResponseDTOS = new ArrayList<>();
            for (Beat value: beats) {
                List<GenreResponseDTO> genres = getGenres(value.getId());
                BeatResponseDTO dto = new BeatResponseDTO(value.getId(),
                        value.getBeatName(),
                        value.getBeatSoundDemo(),
                        getUser(value.getUserName()),
                        value.getPrice(),
                        value.getCreatedAt(),
                        genres,
                        value.getView(),
                        value.getTotalLike(),
                        value.getVocalRange(),
                        value.getTotalRating(),
                        value.getRating(),
                        value.getStatus());
                beatResponseDTOS.add(dto);
            }
            return beatResponseDTOS;
        }
    }

    @NotNull
    private BeatResponseDTO getDetailBeatResponseDTO (Beat beat){
        List<GenreResponseDTO> genres = getGenres(beat.getId());
        BeatResponseDTO dto = new BeatResponseDTO(beat.getId(),
                beat.getBeatName(),
                new UserResponeDTO(beat.getUserName().getFullName()),
                beat.getPrice(),
                beat.getCreatedAt(),
                genres,
                beat.getView(),
                beat.getTotalLike(),
                beat.getVocalRange(),
                beat.getTotalRating(),
                beat.getRating(),
                beat.getStatus());
        return dto;
    }

    @NotNull
    private List<BeatResponseDTO> getBeatResponseDTOS(Optional<User> foundUser, Page<Beat> beats) {
        List<BeatResponseDTO> dtos = new ArrayList<>();
        for(Beat value: beats){
            List<GenreResponseDTO> genres = getGenres(value.getId());
            BeatResponseDTO dto = new BeatResponseDTO(value.getId(),
                    value.getBeatName(),
                    new UserResponeDTO(foundUser.get().getFullName()),
                    value.getPrice(),
                    value.getCreatedAt(),
                    genres,
                    value.getView(),
                    value.getTotalLike(),
                    value.getVocalRange(),
                    value.getTotalRating(),
                    value.getRating(),
                    value.getStatus());
            dtos.add(dto);
        }
        return dtos;
    }

    public PaginationResponseDTO findAllBeat(int page){
        Pageable pageable = PageRequest.of(page-1,8);
        List<Beat> b = beatRepository.findAllListBeat();
        Page<Beat> beats = this.beatRepository.findAllBeat(pageable);
        int max= 0;
        List<BeatResponseDTO> responseDTOS = new ArrayList<>();
        if (beats.isEmpty()) {
            return null;
        } else {
            for (Beat i : beats){
                responseDTOS.add(getDetailBeatResponseDTO(i));
            }
            int pagecount = pageable.getPageNumber();
            if (b.size()%8!=0){
                max = b.size() / 8 +1;
            } else{
                max = b.size()/8 ;
            }
            return new PaginationResponseDTO(responseDTOS,pagecount, max);
        }
    }

    public PaginationResponseDTO findAllOwnBeat(Long id,int page) {
        Optional<User> foundUser = this.userRepository.findById(id);
        Pageable pageable = PageRequest.of(page-1,8);
        List<BeatResponseDTO> responseDTOS = new ArrayList<>();
        if(foundUser.isPresent()){
            Page<Beat> beats = this.beatRepository.findUserBeatByUsername(foundUser.get().getId(), pageable);
            List<Beat> b = beatRepository.listUserBeatByUsername(foundUser.get().getId());
            int pagecount = pageable.getPageNumber();
            responseDTOS = getBeatResponseDTOS(foundUser,beats);
            int max = 0;
            if (responseDTOS.size() % 8 != 0) {
                max = b.size() / 8 + 1;
            } else {
                max = b.size() / 8;
            }
            return new PaginationResponseDTO(responseDTOS,pagecount,max);
        } else {
            return null;
        }
    }

    public ResponseEntity<String> insertBeat(MultipartFile full, MultipartFile demo, BeatDTO beatDTO) {
        Optional<User> foundUser = Optional.ofNullable(this.userRepository.findByUsername(beatDTO.getUsername()));
        if (foundUser.isPresent()) {
            Beat beat = new Beat(beatDTO.getBeatName(),
                    beatDTO.getPrice(),
                    beatDTO.getDescription(),
                    foundUser.get(),
                    genreSet(beatDTO),
                    beatDTO.getVocalRange(),
                    0, 0, 1, 0, 0, 0);
            this.beatRepository.save(beat);

            String path = this.service.uploadFile(full, beat.getId(), "audio", "full", beat.getObjectName());
            String pathDemo = this.service.uploadFile(demo, beat.getId(), "audio", "demo", beat.getObjectNameDemo());;

            String fileName = this.extractObjectNameFromUrl(path);
            String fileNameDemo = this.extractObjectNameFromUrl(pathDemo);

            setPathAndName(path, pathDemo, fileName, fileNameDemo , beat);

            return new ResponseEntity<>("Insert Successfully", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("User not found", HttpStatus.NOT_FOUND);
        }
    }

    public ResponseEntity<String> updateBeat(MultipartFile sound, MultipartFile sound2, BeatDTO newBeat, Long id) {
        Optional<User> foundUser = this.userRepository.findUserByIdAndStatus(newBeat.getUserId(), 1);
        if(foundUser.isPresent()) {
            Optional<Beat> foundBeat = this.beatRepository.findById(id);
            if (foundBeat.isPresent()) {
                Beat beat = foundBeat.get();
                beat.setBeatName(newBeat.getBeatName());
                if (sound != null) {
                    String pathfull = service.uploadFile(sound, foundUser.get().getId(), "audio", "full", beat.getObjectName());
                    String objectfull = extractObjectNameFromUrl(pathfull);
                    beat.setBeatSoundFull(objectfull);
                    beat.setObjectName(objectfull);
                }
                if (sound2 != null) {
                    String pathdemo = service.uploadFile(sound2, foundUser.get().getId(), "audio", "demo", beat.getObjectNameDemo());
                    String objectdemo = extractObjectNameFromUrl(pathdemo);
                    beat.setBeatSoundDemo(pathdemo);
                    beat.setObjectNameDemo(objectdemo);
                }
                beat.setPrice(newBeat.getPrice());
                beat.setGenresofbeat(genreSet(newBeat));
                beat.setVocalRange(newBeat.getVocalRange());
                this.beatRepository.save(beat);
                return new ResponseEntity<>("Update Successfully", HttpStatus.OK);
            }
            return new ResponseEntity<>("Beat not found", HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>("User not found", HttpStatus.NOT_FOUND);
    }



    public ResponseEntity<String> likeBeat(Long id1, Long id2) {
        Optional<User> foundUser = this.userRepository.findById(id1);
        Optional<Beat> beat = this.beatRepository.findById(id2);
        Beat foundBeat = beatRepository.findBeatById(id2);
        Set<Beat> b = foundUser.get().getBeatSet();
        List<Long> t= beatRepository.findUserLiked(id1);
        for (Long i : t){
            if (id2.equals(i)) {
                b.remove(foundBeat);
                foundUser.get().setBeatSet(b);
                userRepository.save(foundUser.get());
                beat.get().setTotalLike( beat.get().getTotalLike() - 1);
                beatRepository.save(beat.get());
                return new ResponseEntity<>("Unlike succesfully", HttpStatus.OK);
            }
        }
        b.add(foundBeat);
        beat.get().setTotalLike( beat.get().getTotalLike() + 1);
        beatRepository.save(beat.get());
        foundUser.get().setBeatSet(b);
        return new ResponseEntity<>("Like Ok", HttpStatus.OK);
    }


    public ResponseEntity<String> deleteBeat(Long id) {
        Optional<Beat> foundBeat = this.beatRepository.findById(id);
        if (foundBeat.isPresent()) {
            Beat beat = foundBeat.get();
            beat.setStatus(0);
            this.beatRepository.save(beat);
            return new ResponseEntity<>("Delete Successfully", HttpStatus.OK);
        }
        return new ResponseEntity<>("Delete Failed", HttpStatus.NOT_IMPLEMENTED);
    }

    public ResponseEntity<String> sellBeat(Long id) {
        Optional<Beat> foundBeat = this.beatRepository.findById(id);
        if (foundBeat.isPresent()) {
            Beat beat = foundBeat.get();
            beat.setStatus(1);
            this.beatRepository.save(beat);
            return new ResponseEntity<>("Sell beat Successfully", HttpStatus.OK);
        }
        return new ResponseEntity<>("Sell Failed", HttpStatus.NOT_IMPLEMENTED);
    }

    public BeatResponseDTO getDetail(Long id) {
        Optional<Beat> foundBeat = this.beatRepository.findById(id);
        if (foundBeat.isPresent()) {
            Beat beat = foundBeat.get();
            BeatResponseDTO responseDTO = new BeatResponseDTO();
            responseDTO.setId(beat.getId());
            responseDTO.setBeatName(beat.getBeatName());
            MusicianInformation information = beat.getUserName().getInformation();
            responseDTO.setYear(information.getYear());
            responseDTO.setProfessional(information.getProfessional());
            responseDTO.setPrize(information.getPrize());
            responseDTO.setBeatSound(beat.getBeatSoundDemo());
            responseDTO.setPrice(beat.getPrice());
            responseDTO.setCreatAt(beat.getCreatedAt());
            responseDTO.setUser(getUser(beat.getUserName()));
            responseDTO.setView(beat.getView());
            responseDTO.setTotalLike(beat.getTotalLike());
            responseDTO.setCmt(beat.getCmt());
            responseDTO.setGenres(getGenres(id));
            responseDTO.setVocalRange(beat.getVocalRange());
            responseDTO.setRating(beat.getRating());
            responseDTO.setTotalRating(beat.getTotalRating());
            responseDTO.setStatus(beat.getStatus());
            return responseDTO;
        }
        return null;
    }

    public List<BeatResponseDTO> searchByBeatName(String name) {
        List<Beat> beatEntity = this.beatRepository.findByBeatName(name);
        return getBeatResponseDTOS(beatEntity);
    }

    public List<BeatResponseDTO> searchByMusician(String name) {
        List<Beat> beats = this.beatRepository.findBeatByMusician(name);
        return getBeatResponseDTOS(beats);
    }

    public List<BeatResponseDTO> searchByGenre(String name){
        List<Beat> beats = this.beatRepository.findBeatsByGenreName(name);
        return getBeatResponseDTOS(beats);
    }

    public List<String> listAllMusician(){
        List<User> beat = beatRepository.findAllUser();
        List<String> list=new ArrayList<>();
        String name;
        for (User i : beat){
            name = String.valueOf(userRepository.findUserName(i.getId()));
            list.add(name);
        }
        return  list;
    }

    public PaginationResponseDTO listBeatSoldOut(Long id, int page) {
        Pageable pageable = PageRequest.of(page-1,8);
        Page<Beat> beats = beatRepository.findAllBeatSoldOut(id,pageable);
        List<Beat> b = beatRepository.listAllBeatSoldOut(id);
        List<BeatResponseDTO> beatResponseDTOS = new ArrayList<>();
        for (Beat i : beats){
            BeatResponseDTO responseDTO = new BeatResponseDTO();
            responseDTO.setId(i.getId());
            responseDTO.setBeatName(i.getBeatName());
            responseDTO.setBeatSound(i.getBeatSoundDemo());
            responseDTO.setPrice(i.getPrice());
            responseDTO.setCreatAt(i.getCreatedAt());
            responseDTO.setOrderInformation(orderService.getInfor(i.getOrderBeat()));
            beatResponseDTOS.add(responseDTO);
        }
        int max = 0;
        if (b.size() % 8 != 0) {
            max = b.size() / 8 + 1;
        } else {
            max = b.size() / 8;
        }
        int pagecount = pageable.getPageNumber();

        return new PaginationResponseDTO(beatResponseDTOS,pagecount,max);
    }

    public List<BeatResponseDTO> beatSoldOut(Long id) {
        List<Beat> beats = beatRepository.findBeatSoldOut(id);
        List<BeatResponseDTO> beatResponseDTOS = new ArrayList<>();
        for (Beat i : beats){
            BeatResponseDTO responseDTO = new BeatResponseDTO();
            responseDTO.setId(i.getId());
            responseDTO.setBeatName(i.getBeatName());
            responseDTO.setBeatSound(i.getBeatSoundDemo());
            responseDTO.setPrice(i.getPrice());
            responseDTO.setCreatAt(i.getCreatedAt());
            beatResponseDTOS.add(responseDTO);
        }
        return new ArrayList<>(beatResponseDTOS);
    }
    public ResponseEntity<Double> income(Long id) {
        List<BeatResponseDTO> beatEntity = beatSoldOut(id);
        Double totalPrice = 0.0;
        for (BeatResponseDTO i : beatEntity){
            totalPrice = totalPrice + i.getPrice();
        }
        return new ResponseEntity<>(totalPrice,HttpStatus.OK);
    }

    public PaginationResponseDTO listBeatPurchased(Long id, int page) {
       List<Order> order = orderService.findOrder(id);
        Pageable pageable = PageRequest.of(page-1,8);
        List<BeatResponseDTO> beat = new ArrayList<>();
        if (order.isEmpty()){
            return null;
        } else{
            int tmp=0;
            for (Order o:order){
                Page<Beat> beatEntity = (beatRepository.findBeatByOrderBeat(o,pageable));
                List<Beat> be =beatRepository.findBeatByOrderBeat(o);
                tmp += be.size();
                if (beatEntity.isEmpty()){
                    return null;
                }
                for (Beat i : beatEntity){
                    BeatResponseDTO b = new BeatResponseDTO();
                    b.setId(i.getId());
                    b.setBeatName(i.getBeatName());
                    b.setPrice(i.getPrice());
                    b.setDescription(i.getDescription());
                    b.setUser(getUser(i.getUserName()));
                    beat.add(b);
                }
            }
            int pagecount = pageable.getPageNumber();
            int max = 0;
            if (tmp % 8 != 0) {
                max = tmp / 8 + 1;
            } else {
                max = tmp / 8;
            }
            return new PaginationResponseDTO(beat,pagecount,max);
        }

    }

    public BeatResponseDTO getBeatPurchasedDetail(Long id) {
        Optional<Beat> foundBeat = this.beatRepository.findById(id);
        if (foundBeat.isPresent()) {
            Beat beat = foundBeat.get();
            BeatResponseDTO responseDTO = new BeatResponseDTO();
            responseDTO.setBeatName(beat.getBeatName());
            responseDTO.setBeatSound(beat.getBeatSoundFull());
            responseDTO.setPrice(beat.getPrice());
            responseDTO.setCreatAt(beat.getCreatedAt());
            responseDTO.setUser(getUser(beat.getUserName()));
            responseDTO.setGenres(getGenres(id));
            responseDTO.setVocalRange(beat.getVocalRange());
            return responseDTO;
        }
        return null;
    }

    public BeatResponseDTO getDemoBeat(Long id){
        BeatResponseDTO responseDTO = new BeatResponseDTO();
        Optional<Beat> beat = beatRepository.findById(id);
        beatRepository.save(beat.get());
        responseDTO.setBeatSound(beat.get().getBeatSoundDemo());
        return responseDTO;
    }
    public BeatResponseDTO getFullBeat(Long id){
        BeatResponseDTO responseDTO = new BeatResponseDTO();
        Optional<Beat> beat = beatRepository.findById(id);
        responseDTO.setBeatSound(beat.get().getBeatSoundFull());
        return responseDTO;
    }

    public ResponseEntity<Boolean> isLiked (Long userid, Long beatId){
        Optional<User> foundUser = this.userRepository.findUserByIdAndStatus(userid, 1);
        if(foundUser.isPresent()){
            Optional<Beat> foundBeat = Optional.ofNullable(this.beatRepository.findBeatLikeByUser(userid, beatId));
            return foundBeat.isPresent()? new ResponseEntity<>(true, HttpStatus.OK) : new ResponseEntity<>(false, HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(false, HttpStatus.NOT_FOUND);
    }

}
