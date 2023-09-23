package com.example.demo.controller;

import com.example.demo.dto.BeatDTO;
import com.example.demo.entity.Beat;
import com.example.demo.entity.User;
import com.example.demo.repository.BeatRepository;
import com.example.demo.repository.UserRepository;
import com.example.demo.response.ResponseObject;
import com.example.demo.service.BeatService;
import com.example.demo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path = "/api/beat")
public class BeatController {
    @Autowired
    private BeatRepository beatRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private BeatService beatService;

    User user = new User();

    //get all beat
    @GetMapping("/getAll")
    public List<Beat> getAllBeats() {
        return beatRepository.findAll();
    }

    //get detail beat
    @GetMapping("/{id}")
    public ResponseEntity<ResponseObject> findById(@PathVariable Long id) {
        Optional<Beat> foundBeat = beatRepository.findById(id);
        if (foundBeat.isPresent()) {
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
    public ResponseEntity<ResponseObject> insertBeat(@RequestBody BeatDTO beatDTO) {
        return beatService.insertBeat(beatDTO);
    }


    //Update
    @PutMapping("/{id}")
    public ResponseEntity<ResponseObject> updateBeat(@RequestBody Beat newBeat, @PathVariable Long id) {
        return beatService.updateBeat(newBeat, id);
    }

    //Delete beat
    @DeleteMapping("/{id}")
    public ResponseEntity<ResponseObject> deleteBeat(@PathVariable Long id) {
        return beatService.deleteBeat(id);
    }

}
