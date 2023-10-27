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
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.apache.commons.codec.binary.Base64;
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
        if (fullUrl.startsWith("https://storage.googleapis.com/")) {
            int startIndex = "https://storage.googleapis.com/".length();
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
                        value.getRating());
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
                beat.getRating());
        return dto;
    }

    @NotNull
    private List<BeatResponseDTO> getBeatResponseDTOS(Optional<User> foundUser, List<Beat> beats) {
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
                    value.getRating());
            dtos.add(dto);
        }
        return dtos;
    }

    public List<BeatResponseDTO> findAllBeat(){
        List<Beat> beats = this.beatRepository.findAllBeat();
        List<BeatResponseDTO> responseDTOS = new ArrayList<>();
        if (beats.isEmpty()) {
            return null;
        } else {
            for (Beat i : beats){
                responseDTOS.add(getDetailBeatResponseDTO(i));
            }
            return new ArrayList<>(responseDTOS);
        }
    }

    public List<BeatResponseDTO> findAllOwnBeat(Long id) {
        Optional<User> foundUser = this.userRepository.findById(id);
        if(foundUser.isPresent()){
            List<Beat> beats = this.beatRepository.findUserBeatByUsername(foundUser.get().getId());
            return getBeatResponseDTOS(foundUser, beats);
        } else {
            return null;
        }
    }

    public ResponseEntity<String> insertBeat(MultipartFile sound, MultipartFile sound2, BeatDTO beatDTO) {
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

            String path = this.service.uploadFile(sound, beat.getId(), "audio", "full");
            String pathDemo = this.service.uploadFile(sound, beat.getId(), "audio", "demo");;

            String fileName = this.extractObjectNameFromUrl(path);
            String fileNameDemo = this.extractObjectNameFromUrl(pathDemo);

            setPathAndName(path, pathDemo, fileName, fileNameDemo , beat);

            return new ResponseEntity<>("Insert Successfully", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("User not found", HttpStatus.NOT_FOUND);
        }
    }

    public ResponseEntity<String> updateBeat(MultipartFile sound, MultipartFile sound2,BeatDTO newBeat, Long id) {
        Optional<Beat> foundBeat = this.beatRepository.findById(id);
        if (foundBeat.isPresent()) {
            Beat beat = foundBeat.get();
            beat.setBeatName(newBeat.getBeatName());
            service.updateFile(sound, beat.getObjectName());
            service.updateFile(sound2, beat.getObjectNameDemo());
            beat.setPrice(newBeat.getPrice());
            beat.setGenresofbeat(genreSet(newBeat));
            beat.setVocalRange(newBeat.getVocalRange());
            this.beatRepository.save(beat);
            return new ResponseEntity<>("Update Successfully", HttpStatus.OK);
        }
        return new ResponseEntity<>("Update Failed", HttpStatus.NOT_IMPLEMENTED);
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

    public List<BeatResponseDTO> listBeatPurchased(Long id) {
       List<Order> order = orderService.findOrder(id);
        List<BeatResponseDTO> beat = new ArrayList<>();
        BeatResponseDTO b = new BeatResponseDTO();
        if (order.isEmpty()){
            return null;
        }
        for (Order o:order){
            List<Beat> beatEntity = (beatRepository.findBeatByOrderBeat(o));
            if (beatEntity.isEmpty()){
                return null;
            }
            for (Beat i : beatEntity){
                b.setBeatName(i.getBeatName());
                b.setPrice(i.getPrice());
                b.setDescription(b.getDescription());
                b.setUser(getUser(i.getUserName()));
                beat.add(b);
            }

        }
        return beat;
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

}
