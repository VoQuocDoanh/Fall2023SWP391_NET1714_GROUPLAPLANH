//
// Source code recreated from a .class file by IntelliJ IDEA
// (powered by FernFlower decompiler)
//

package com.example.demo.controller;

import com.example.demo.dto.BeatDTO;
import com.example.demo.dto.UserDTO;
import com.example.demo.entity.Beat;
import com.example.demo.entity.User;
import com.example.demo.service.BeatService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = {"/api/v1/beat"})
public class BeatController {

    @Autowired
    private BeatService beatService;

    // List own beats in Musician
    @GetMapping("")
    public ResponseEntity<List<Beat>> findAllBeat(@RequestBody BeatDTO beatDTO) {
        return ResponseEntity.ok(this.beatService.findAllBeat(beatDTO));
    }

    // Get detail beat US and MS
    @GetMapping("/{id}")
    public ResponseEntity<Beat> findById(@PathVariable Long id){
        return ResponseEntity.ok(this.beatService.findById(id));
    }

    // Search beat by Name
    @GetMapping("/name")
    public ResponseEntity<List<Beat>> searchByBeatName(@Valid @RequestBody BeatDTO beatDTO) {
        return ResponseEntity.ok(this.beatService.searchByBeatName(beatDTO));
    }

    // Search beat by Musician
    @GetMapping("/musician")
    public ResponseEntity<List<Beat>> searchByMusician(@Valid @RequestBody UserDTO userDTO) {
        return ResponseEntity.ok(this.beatService.searchByMusician(userDTO));
    }

    //Add beat in musician
    @PostMapping({""})
    public ResponseEntity<String> uploadBeat(@Valid @RequestBody BeatDTO beatDTO) {
        return this.beatService.insertBeat(beatDTO);
    }

    //Update beat in MS
    @PutMapping({"/{id}"})
    public ResponseEntity<String> updateBeat(@Valid @RequestBody Beat newBeat, @PathVariable Long id) {
        return this.beatService.updateBeat(newBeat, id);
    }

    //delete beat by update status in MS
    @DeleteMapping({"/{id}"})
    public ResponseEntity<String> deleteBeat(@Valid @RequestBody Beat deleteBeat, @PathVariable Long id) {
        return this.beatService.deleteBeat(deleteBeat, id);
    }

}
