package com.example.demo.controller;

import com.example.demo.dto.BeatDTO;
import com.example.demo.entity.Beat;
import com.example.demo.entity.User;
import com.example.demo.entity.User;
import com.example.demo.repository.BeatRepository;
import com.example.demo.repository.UserRepository;
import com.example.demo.repository.UserRepository;
import com.example.demo.response.ResponseObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping(path="/beat")
public class BeatController {
    @Autowired
    BeatRepository beatRepository;

    @Autowired
    UserRepository userRepository;

    User user=new User();

    //get all beat
    @GetMapping("/getAll")
    List<Beat> getAllBeats(){
        return beatRepository.findAll();

    }

    //get detail beat
    @GetMapping("/{id}")
    ResponseEntity<ResponseObject> findById(@PathVariable Long id){
        Optional<Beat> foundBeat= beatRepository.findById(id);
        if (foundBeat.isPresent()){
            return ResponseEntity.status(HttpStatus.OK).body(
                    new ResponseObject("OK","Query product successfully",foundBeat)

            );

        }else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(
                    new ResponseObject("false","Cannot find beat with id= "+id,"")
            );
        }

    }

    @PostMapping("/insertBeat")

    //Add new product
    ResponseEntity<ResponseObject> insertBeat(@RequestBody BeatDTO newBeat){
        Optional<User> userName= userRepository.findByUsername(newBeat.getUsername());
        User user = userRepository.findUserByUsername(newBeat.getUsername());
        List<Beat> foundBeat= beatRepository.findByBeatName(newBeat.getBeatName().trim());
        if (!foundBeat.isEmpty() ){
            return ResponseEntity.status(HttpStatus.NOT_IMPLEMENTED).body(
                    new ResponseObject
                            ("failed", "Beat name already taken","")
            );
        } else if(!userName.isPresent()){
            return ResponseEntity.status(HttpStatus.NOT_IMPLEMENTED).body(
                    new ResponseObject
                            ("failed", "User Name is invalid","")
            );
        }
        else{
            String beatName= newBeat.getBeatName();
            String beatSound= newBeat.getBeatSound();
            Double price=newBeat.getPrice();
            int status= newBeat.getStatus();
            User username= userName.get();
            Beat beat=new Beat();
            beat=new Beat
                    (beatName, beatSound, price, status, username);
            return ResponseEntity.status(HttpStatus.OK).body(
                new ResponseObject
                        ("ok","Add beat successfully", beatRepository.save(beat))
        ); }
    }

  /*  public Beat createNewBeat(BeatDTO beatDTO){
        Optional<Beat> beatEntity=beatRepository.findNameByBeatName(beatDTO.getBeatName());
        Optional<User> userEntity=userRepository.findByUsername(beatDTO.getUsername());
        if(beatEntity.isPresent() && userEntity.isPresent()){
            String beatName= beatDTO.getBeatName();
            String beatSound= beatDTO.getBeatSound();
            Double price=beatDTO.getPrice();
            int status= beatDTO.getStatus();
            User username= userEntity.get();
            Beat newBeat=new Beat(beatName,beatSound,price,status,username);
            return beatRepository.save(newBeat);
        } return null;
    }*/

    //Update
    @PutMapping("/{id}")
    ResponseEntity<ResponseObject> updateBeat(@RequestBody Beat newBeat, @PathVariable Long id) {
        Optional<Beat> updateBeat = beatRepository.findById(id)
                .map(beat -> {
                    beat.setBeatName(newBeat.getBeatName());
                    beat.setBeatSound(newBeat.getBeatSound());
                    beat.setPrice(newBeat.getPrice());
                    beat.setStatus(newBeat.getStatus());
                    return beatRepository.save(newBeat);
                });
        return ResponseEntity.status(HttpStatus.OK).body(
                new ResponseObject("OK","Update successfully","")
        );
    }

    //Delete beat
    @DeleteMapping("/{id}")
    ResponseEntity<ResponseObject> deleteBeat(@PathVariable Long id){
        boolean exists = beatRepository.existsById(id);
        if(exists){
            beatRepository.deleteById(id);
            return ResponseEntity.status(HttpStatus.OK).body(
                    new ResponseObject("ok","Delete beat successfully","")
            );
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(
                new ResponseObject("failed","Cannot find beat to delete","")
        );
    }

}
