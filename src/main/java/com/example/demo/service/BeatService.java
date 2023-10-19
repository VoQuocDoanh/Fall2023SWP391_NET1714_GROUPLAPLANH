//
// Source code recreated from a .class file by IntelliJ IDEA
// (powered by FernFlower decompiler)
//

package com.example.demo.service;

import com.example.demo.dto.*;
import com.example.demo.entity.Beat;
import com.example.demo.entity.Genre;
import com.example.demo.entity.Song;
import com.example.demo.entity.User;
import com.example.demo.repository.BeatRepository;
import com.example.demo.repository.GenreRepository;
import com.example.demo.repository.UserRepository;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.stream.IntStream;

@Service
public class BeatService {

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private BeatRepository beatRepository;
    @Autowired
    private GenreRepository genreRepository;

    private UserResponeDTO getUser(User user){
        return new UserResponeDTO(user.getId(), user.getFullName());
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
                BeatResponseDTO dto = new BeatResponseDTO(value.getId(),
                        value.getBeatName(),
                        value.getBeatSound(),
                        getUser(value.getUserName()),
                        value.getPrice(),
                        value.getCreatedAt(),
                        value.getView(),
                        value.getTotalLike());
                beatResponseDTOS.add(dto);
            }
            return beatResponseDTOS;
        }
    }

    @NotNull
    private List<BeatResponseDTO> getBeatResponseDTOS(Optional<User> foundUser, List<Beat> beats) {
        List<BeatResponseDTO> dtos = new ArrayList<>();
        for(Beat value: beats){
            BeatResponseDTO dto = new BeatResponseDTO(value.getId(),
                    value.getBeatSound(),
                    value.getBeatSound(),
                    new UserResponeDTO(foundUser.get().getFullName()),
                    value.getPrice(),
                    value.getCreatedAt(),
                    value.getView(),
                    value.getTotalLike());
            dtos.add(dto);
        }
        return dtos;
    }

    public List<Beat> findAllBeat(){
        List<Beat> beats = this.beatRepository.findAllBeat();
        if (beats.isEmpty()) {
            return null;
        } else {
            return new ArrayList<>(beats);
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

    public ResponseEntity<String> insertBeat(BeatDTO beatDTO) {
        Optional<User> foundUser = Optional.ofNullable(this.userRepository.findByUsername(beatDTO.getUsername()));
        if (foundUser.isPresent()) {
            Beat beat = new Beat(beatDTO.getBeatName(),
                    beatDTO.getPrice(),
                    beatDTO.getBeatSound(),
                    beatDTO.getDescription(),
                    0,
                    0,
                    foundUser.get(),
                    genreSet(beatDTO),
                    1,
                    0,
                    0,
                    0);
            this.beatRepository.save(beat);
            return new ResponseEntity<>("Insert Successfully", HttpStatus.OK);

        } else {
            return new ResponseEntity<>("User not found", HttpStatus.NOT_FOUND);
        }
    }

    public ResponseEntity<String> updateBeat(BeatDTO newBeat, Long id) {
        Optional<Beat> foundBeat = this.beatRepository.findById(id);
        if (foundBeat.isPresent()) {
            Beat beat = foundBeat.get();
            beat.setBeatName(newBeat.getBeatName());
            beat.setBeatSound(newBeat.getBeatSound());
            beat.setPrice(newBeat.getPrice());
            beat.setGenresofbeat(genreSet(newBeat));
            this.beatRepository.save(beat);
            return new ResponseEntity<>("Update Successfully", HttpStatus.OK);
        }
        return new ResponseEntity<>("Update Failed", HttpStatus.NOT_IMPLEMENTED);
    }

    public ResponseEntity<String> ratingBeat(Long id1, Long id2, BeatDTO beatDTO) {
        Optional<User> foundUser = this.userRepository.findById(id1);
        Optional<Beat> beat = this.beatRepository.findById(id2);
        Beat foundBeat = beatRepository.findBeatById(id2);
        Set<Beat> b = foundUser.get().getBeatRating();
        List<Long> t= beatRepository.findUserRating(id1);
        for (Long i : t){
            if (id2.equals(i)) {

                foundUser.get().setBeatRating(b);
                userRepository.save(foundUser.get());
                return new ResponseEntity<>("Rerating!", HttpStatus.NOT_IMPLEMENTED);
            }
        }
        b.add(foundBeat);
        beat.get().setRating((beat.get().getRating() * beat.get().getTotalRating() + beatDTO.getRating())/(beat.get().getTotalRating()+1));
        beat.get().setTotalRating( beat.get().getTotalRating() + 1);
        beatRepository.save(beat.get());
        return  new ResponseEntity<>("rating!", HttpStatus.OK);
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
            responseDTO.setBeatSound(beat.getBeatSound());
            responseDTO.setPrice(beat.getPrice());
            responseDTO.setCreatAt(beat.getCreatedAt());
            responseDTO.setUser(getUser(beat.getUserName()));
            beat.setView(beat.getView() + 1 );
            beatRepository.save(beat);
            responseDTO.setView(beat.getView());
            responseDTO.setTotalLike(beat.getTotalLike());
            responseDTO.setCmt(beat.getCmt());

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


    public List<Beat> beatSoldOut(Long id) {
        List<Beat> beats = beatRepository.findBeatSoldOut(id);
        return new ArrayList<>(beats);
    }
}
