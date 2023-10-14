//
// Source code recreated from a .class file by IntelliJ IDEA
// (powered by FernFlower decompiler)
//

package com.example.demo.service;

import com.example.demo.dto.BeatDTO;
import com.example.demo.dto.BeatResponseDTO;
import com.example.demo.entity.Beat;
import com.example.demo.entity.User;
import com.example.demo.repository.BeatRepository;
import com.example.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.stream.IntStream;

@Service
public class BeatService {

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private BeatRepository beatRepository;
    public List<Beat> findAllBeat(){
        List<Beat> beats = this.beatRepository.findAllBeat();
        if (beats.isEmpty()) {
            return null;
        } else {
            return new ArrayList<>(beats);
        }
    }

    public List<Beat> findAllOwnBeat(BeatDTO beatDTO) {
        User userEntity = this.userRepository.findByUsername(beatDTO.getUsername());
        List<Beat> beat = this.beatRepository.findByOrderByStatusDesc();
        if (userEntity == null) {
            return null;
        } else {
            List<Beat> beatEntity = new ArrayList<>();
            for (Beat value : beat) {
                User user = value.getUserName();
                if (user.getId().equals(userEntity.getId())) {
                    Beat ownBeat = new Beat(value.getId(),
                            value.getBeatName(),
                            value.getBeatSound(),
                            value.getPrice(),
                            value.getStatus(),
                            value.getOrderBeat(),
                            value.getCreatedAt(),
                            value.getTotalLike(),
                            value.getView());
                    beatEntity.add(ownBeat);
                }
            }
            return beatEntity;
        }
    }

    public ResponseEntity<String> insertBeat(BeatDTO beatDTO) {
        User user = this.userRepository.findByUsername(beatDTO.getUsername());
        if (user == null) {
            return new ResponseEntity<>("User not found", HttpStatus.NOT_FOUND);
        } else {
            Optional<User> userEntity = Optional.ofNullable(this.userRepository.findByUsername(user.getUsername()));
            if (userEntity.isPresent()) {
                String beatName = beatDTO.getBeatName();
                Double price = beatDTO.getPrice();
                String beatSound = beatDTO.getBeatSound();
                Beat newBeat = new Beat(beatName, beatSound, price, 1, userEntity.get(),0 ,0);
                this.beatRepository.save(newBeat);
                return new ResponseEntity<>("Insert Successfully", HttpStatus.OK);
            } else {
                return new ResponseEntity<>("Insert Failed", HttpStatus.NOT_IMPLEMENTED);
            }
        }
    }

    public ResponseEntity<String> updateBeat(Beat newBeat, Long id) {
        Optional<Beat> foundBeat = this.beatRepository.findById(id);
        if (foundBeat.isPresent()) {
            Beat beat = foundBeat.get();
            beat.setBeatName(newBeat.getBeatName());
            beat.setBeatSound(newBeat.getBeatSound());
            beat.setPrice(newBeat.getPrice());
            this.beatRepository.save(beat);
            return new ResponseEntity<>("Update Successfully", HttpStatus.OK);
        }
        return new ResponseEntity<>("Update Failed", HttpStatus.NOT_IMPLEMENTED);
    }

    public ResponseEntity<String> likeBeat(Long id1, Long id2) {
        Optional<User> user = this.userRepository.findById(id1);
        Optional<Beat> beat = this.beatRepository.findById(id2);
        Beat foundBeat = beatRepository.findBeatById(id2);
        User u = user.get();
        Beat beatEntity = beat.get();
        Set<Beat> b = user.get().getBeatSet();
        List<Long> t= beatRepository.findUserLiked(id1);
        for (Long i : t){
            if (id2.equals(i)) {
                b.remove(foundBeat);
                u.setBeatSet(b);
                userRepository.save(u);
                beatEntity.setTotalLike( beat.get().getTotalLike() - 1);
                beatRepository.save(beatEntity);
                return new ResponseEntity<>("Unlike succesfully", HttpStatus.NOT_IMPLEMENTED);
            }
        }
        b.add(foundBeat);
        beatEntity.setTotalLike( beat.get().getTotalLike() + 1);
        beatRepository.save(beatEntity);
        u.setBeatSet(b);
        return new ResponseEntity<>("Like Ok", HttpStatus.NOT_IMPLEMENTED);
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
            responseDTO.setBeatName(beat.getBeatName());
            responseDTO.setBeatSound(beat.getBeatSound());
            responseDTO.setPrice(beat.getPrice());
            responseDTO.setCreatAt(beat.getCreatedAt());
            responseDTO.setUsername(beat.getUserName());
            beat.setView(beat.getView() + 1 );
            beatRepository.save(beat);
            responseDTO.setView(beat.getView());
            responseDTO.setTotalLike(beat.getTotalLike());
            return responseDTO;
        }
        return null;
    }

    public List<Beat> searchByBeatName(BeatDTO beatDTO) {
        List<Beat> beatEntity = this.beatRepository.findByBeatName(beatDTO.getBeatName());
        return beatEntity.isEmpty() ? null : beatEntity;
    }

    public List<Beat> searchByMusician(BeatDTO beatDTO) {
        List<User> musicianList = userRepository.findByfullName(beatDTO.getFullName());
        List<Beat> beatList = new ArrayList<>();
        List<Beat> beat = beatRepository.findAll();
        if (musicianList.isEmpty()) {
            return null;
        } else {
            for (User value : musicianList) {
                IntStream.range(0, beat.size()).forEach(i -> {
                    User user = beat.get(i).getUserName();
                    if (user.getId().equals(value.getId())) {
                        Beat fBeat = new Beat(
                                beat.get(i).getId(),
                                beat.get(i).getBeatName(),
                                beat.get(i).getBeatSound(),
                                beat.get(i).getPrice(),
                                beat.get(i).getStatus(),
                                beat.get(i).getOrderBeat(),
                                beat.get(i).getCreatedAt(),
                                beat.get(i).getTotalLike(),
                                beat.get(i).getView()
                        );
                        beatList.add(fBeat);
                    }
                });
            }
            return beatList;
        }
    }


}
