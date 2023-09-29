//
// Source code recreated from a .class file by IntelliJ IDEA
// (powered by FernFlower decompiler)
//

package com.example.demo.controller;

import com.example.demo.dto.BeatDTO;
import com.example.demo.entity.Beat;
import com.example.demo.entity.User;
import com.example.demo.repository.BeatRepository;
import com.example.demo.repository.UserRepository;
import com.example.demo.response.ResponseObject;
import com.example.demo.service.BeatService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path = ("beat"))
public class BeatController {

    @Autowired
    private BeatRepository beatRepository;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private BeatService beatService;

    //List own beat
    @GetMapping("")
    public ResponseEntity<ResponseObject> findAllBeat(@RequestBody BeatDTO beatDTO) {
        return this.beatService.findAllBeat(beatDTO);
    }

    //Get detail beat
    @GetMapping("/{id}")
    public ResponseEntity<ResponseObject> findById(@PathVariable Long id){
        return beatService.findById(id);
    }

    //Search beat in User
    @GetMapping("/search")
    public ResponseEntity<ResponseObject> searchByBeatName(@RequestBody BeatDTO beatDTO) {
        return this.beatService.searchByBeatName(beatDTO);
    }

    @GetMapping("/searchByMusician")
    public ResponseEntity<ResponseObject> searchByMusician(@RequestBody BeatDTO beatDTO) {
        return this.beatService.searchByMusician(beatDTO);
    }


    //Add beat in musician
    @PostMapping({"/insertBeat"})
    public ResponseEntity<ResponseObject> insertBeat(@RequestBody BeatDTO beatDTO) {
        return this.beatService.insertBeat(beatDTO);
    }

    //Update beat in MS
    @PutMapping({"/{id}"})
    public ResponseEntity<ResponseObject> updateBeat(@RequestBody Beat newBeat, @PathVariable Long id) {
        return this.beatService.updateBeat(newBeat, id);
    }

    //delete beat by update status in MS
    @DeleteMapping({"delete/{id}"})
    public ResponseEntity<ResponseObject> deleteBeat(@RequestBody Beat newBeat, @PathVariable Long id) {
        return this.beatService.deleteBeat(newBeat, id);
    }

}
