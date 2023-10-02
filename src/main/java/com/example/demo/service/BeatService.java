//
// Source code recreated from a .class file by IntelliJ IDEA
// (powered by FernFlower decompiler)
//

package com.example.demo.service;

import com.example.demo.dto.BeatDTO;
import com.example.demo.dto.UserDTO;
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
import java.util.stream.IntStream;

@Service
public class BeatService {

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private BeatRepository beatRepository;

    //get all own beat
    public List<Beat> findAllBeat(BeatDTO beatDTO) {
        User userEntity = userRepository.findByUsername(beatDTO.getUsername());
        List<Beat> beat = beatRepository.findAll();
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
                            value.getOrderBeat(),
                            value.getCreatedAt());
                    beatEntity.add(ownBeat);
                }
            }
            int tmp = beatEntity.size();
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
                Beat newBeat = new Beat(beatName, beatSound, price, 1, (User) userEntity.get());
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

    public ResponseEntity<String> deleteBeat(Beat deleteBeat, Long id) {
        Optional<Beat> foundBeat = this.beatRepository.findById(id);
        if (foundBeat.isPresent()) {
            Beat beat = foundBeat.get();
            beat.setStatus(deleteBeat.getStatus());
            this.beatRepository.save(beat);
            return new ResponseEntity<>("Delete Successfully", HttpStatus.OK);
        }
        return new ResponseEntity<>("Delete Failed", HttpStatus.NOT_IMPLEMENTED);
    }

    public Beat findById(Long id) {
        Optional<Beat> foundBeat = this.beatRepository.findById(id);
        return foundBeat.isEmpty() ? null : this.beatRepository.findById(id).orElseThrow();
    }

    public List<Beat> searchByBeatName(BeatDTO beatDTO) {
        List<Beat> beatEntity = this.beatRepository.findByBeatName(beatDTO.getBeatName());
        return beatEntity.isEmpty() ? null : beatEntity;
    }

    public List<Beat> searchByMusician(UserDTO musician) {
        List<User> musicianList = userRepository.findByfullName(musician.getUsername());
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
                                beat.get(i).getOrderBeat(),
                                beat.get(i).getCreatedAt()
                        );
                        beatList.add(fBeat);
                    }
                });
            }
            return beatList;
        }
    }


}
