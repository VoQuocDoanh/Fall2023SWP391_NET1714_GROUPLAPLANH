//
// Source code recreated from a .class file by IntelliJ IDEA
// (powered by FernFlower decompiler)
//

package com.example.demo.service;

import com.example.demo.dto.BeatDTO;
import com.example.demo.entity.Beat;
import com.example.demo.entity.User;
import com.example.demo.repository.BeatRepository;
import com.example.demo.repository.UserRepository;
import com.example.demo.response.ResponseObject;

import java.math.BigInteger;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class BeatService {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private BeatRepository beatRepository;

    public BeatService() {
    }

    //get all own beat
    public ResponseEntity<ResponseObject> findAllBeat(BeatDTO beatDTO){
        User userEntity = userRepository.findByUsername(beatDTO.getUsername());
        List<Beat> beat =beatRepository.findAll();
        if (userEntity == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(
                    new ResponseObject("false", "Connot find your beat", "")
            );
        }else{
            List<Beat> beatEntity= new ArrayList<>();
            for (int i=0;i<beat.size();i++){
                User t=beat.get(i).getUserName();
                if (t.getId().equals(userEntity.getId())){
                    Beat ownBeat=new Beat( beat.get(i).getId(),
                                        beat.get(i).getBeatName(),
                                        beat.get(i).getBeatSound(),
                                        beat.get(i).getPrice(),
                                        beat.get(i).getOrderBeat(),
                                        beat.get(i).getCreatedAt());
                    beatEntity.add(ownBeat);
                }
            }
            int tmp=beatEntity.size();
            return ResponseEntity.status(HttpStatus.OK).body(
                    new ResponseObject("true", "Querry successfully", beatEntity));
            }
        }


    public ResponseEntity<ResponseObject> insertBeat(BeatDTO beatDTO) {
        User user = this.userRepository.findByUsername(beatDTO.getUsername());
        if (user == null) {
            return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject("ok", "Not found userName", ""));
        } else {
            Optional<User> userEntity = Optional.ofNullable(this.userRepository.findByUsername(user.getUsername()));
            if (userEntity.isPresent()) {
                String beatName = beatDTO.getBeatName();
                Double price = beatDTO.getPrice();
                String beatSound = beatDTO.getBeatSound();
                Beat newBeat = new Beat(beatName, beatSound, price, 1, (User)userEntity.get());
                return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject("ok", "Added beat successfully", this.beatRepository.save(newBeat)));
            } else {
                return ResponseEntity.status(HttpStatus.NOT_IMPLEMENTED).body(new ResponseObject("failed", "Add beat failed", ""));
            }
        }
    }

    public ResponseEntity<ResponseObject> updateBeat(Beat newBeat, Long id) {
        Optional<Beat> updateBeat = this.beatRepository.findById(id).map((beat) -> {
            beat.setBeatName(newBeat.getBeatName());
            beat.setBeatSound(newBeat.getBeatSound());
            beat.setPrice(newBeat.getPrice());
            return (Beat)this.beatRepository.save(beat);
        });
        return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject("OK", "Update successfully", ""));
    }

    public ResponseEntity<ResponseObject> deleteBeat(Beat newBeat, Long id) {
        Optional<Beat> deleteBeat = this.beatRepository.findById(id).map((beat) -> {
            beat.setStatus(newBeat.getStatus());
            return (Beat)this.beatRepository.save(beat);
        });
        return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject("OK", "Update successfully", ""));
    }

    public ResponseEntity<ResponseObject> findById(Long id) {
        Optional<Beat> foundBeat = this.beatRepository.findById(id);
        return !foundBeat.isEmpty() ? ResponseEntity.status(HttpStatus.OK).body(new ResponseObject("OK", "Query product successfully", foundBeat)) : ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ResponseObject("false", "Cannot find beat with id= " + id, ""));
    }

    public ResponseEntity<ResponseObject> searchByBeatName(BeatDTO beatDTO) {
        new Beat();
        List<Beat> beatEntity = this.beatRepository.findByBeatName(beatDTO.getBeatName());
        return beatEntity.isEmpty() ? ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ResponseObject("false", "Cannot find beat name", ""))
                : ResponseEntity.status(HttpStatus.OK).body(new ResponseObject("OK", "Query product successfully", beatEntity));
    }
}
