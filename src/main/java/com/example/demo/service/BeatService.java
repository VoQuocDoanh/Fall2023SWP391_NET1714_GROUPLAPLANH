package com.example.demo.service;


import com.example.demo.dto.BeatDTO;
import com.example.demo.entity.Beat;
import com.example.demo.entity.User;
import com.example.demo.repository.BeatRepository;
import com.example.demo.repository.UserRepository;
import com.example.demo.response.ResponseObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.Optional;

@Service
public class BeatService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private BeatRepository beatRepository;

    public ResponseEntity<ResponseObject> insertBeat(BeatDTO beatDTO) {

        User user = userRepository.findByUsername(beatDTO.getUsername());
        Optional<User> userEntity = userRepository.findById(user.getId());

        if (userEntity.isPresent()) {

            String beatName = beatDTO.getBeatName();
            String orderID = beatDTO.getOrderID();
            Double price = beatDTO.getPrice();
            String beatSound = beatDTO.getBeatSound();

            Beat newBeat = new Beat(beatName, beatSound, price, 1, userEntity.get());

            return ResponseEntity.status(HttpStatus.OK)
                    .body(new ResponseObject("ok", "Added beat successfully", beatRepository.save(newBeat)));

        }

        return ResponseEntity.status(HttpStatus.NOT_IMPLEMENTED)
                .body(new ResponseObject("failed", "Add beat failed", ""));
    }


    public ResponseEntity<ResponseObject> updateBeat(Beat newBeat, Long id) {
        Optional<Beat> updateBeat = beatRepository.findById(id)
                .map(beat -> {
                    beat.setBeatName(newBeat.getBeatName());
                    beat.setBeatSound(newBeat.getBeatSound());
                    beat.setPrice(newBeat.getPrice());
                    beat.setStatus(newBeat.getStatus());
                    return beatRepository.save(newBeat);
                });
        return ResponseEntity.status(HttpStatus.OK).body(
                new ResponseObject("OK", "Update successfully", "")
        );
    }

   public ResponseEntity<ResponseObject> deleteBeat(Long id) {
        boolean exists = beatRepository.existsById(id);
        if (exists) {
            beatRepository.deleteById(id);
            return ResponseEntity.status(HttpStatus.OK).body(
                    new ResponseObject("ok", "Delete beat successfully", "")
            );
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(
                new ResponseObject("failed", "Cannot find beat to delete", "")
        );
    }
}
