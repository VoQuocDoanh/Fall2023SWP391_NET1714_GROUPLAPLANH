package com.example.demo.controller;

import com.example.demo.entity.Beat;
import com.example.demo.repository.BeatRepository;
import com.example.demo.response.ResponseObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path="/api/beat")
public class BeatController {
    @Autowired
    BeatRepository repository;
    @GetMapping("")
    List<Beat> getAllBeats(){
        return repository.findAll();

    }

    //get detail beat
    @GetMapping("/{id}")
    ResponseEntity<ResponseObject> findById(@PathVariable Long id){
        Optional<Beat> foundBeat= repository.findById(id);
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
    //Insert new product
    @PostMapping("/insertBeat")
    ResponseEntity<ResponseObject> insertBeat(@RequestBody Beat newBeat){
        List<Beat> foundBeat=repository.findByBeatName(newBeat.getBeatName().trim());
        if (!foundBeat.isEmpty()){
            return ResponseEntity.status(HttpStatus.NOT_IMPLEMENTED).body(
                    new ResponseObject("failed", "Beat name already taken","")
            );

        }
        return ResponseEntity.status(HttpStatus.OK).body(
                new ResponseObject("ok","Insert beat successfully",repository.save(newBeat))
        );
    }


    //Update


    @PutMapping("/{id}")
    ResponseEntity<ResponseObject> updateBeat(@RequestBody Beat newBeat, @PathVariable Long id) {
        Optional<Beat> updateBeat = repository.findById(id)
                .map(beat -> {
                    beat.setBeatName(newBeat.getBeatName());
                    beat.setBeatSound(newBeat.getBeatSound());
                    beat.setPrice(newBeat.getPrice());
                    beat.setStatus(newBeat.getStatus());
                    return repository.save(newBeat);
                });
        return ResponseEntity.status(HttpStatus.OK).body(
                new ResponseObject("OK","Update successfully","")
        );
    }

    //Delete beat
    @DeleteMapping("/{id}")
    ResponseEntity<ResponseObject> deleteBeat(@PathVariable Long id){
        boolean exists = repository.existsById(id);
        if(exists){
            repository.deleteById(id);
            return ResponseEntity.status(HttpStatus.OK).body(
                    new ResponseObject("ok","Delete beat successfully","")
            );
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(
                new ResponseObject("failed","Cannot find beat to delete","")
        );
    }

}
