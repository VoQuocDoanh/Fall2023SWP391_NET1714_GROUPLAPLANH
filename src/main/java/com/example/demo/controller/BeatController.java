//
// Source code recreated from a .class file by IntelliJ IDEA
// (powered by FernFlower decompiler)
//

package com.example.demo.controller;

import com.example.demo.dto.BeatDTO;
import com.example.demo.dto.BeatResponseDTO;
import com.example.demo.entity.Beat;
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

    // List own Beats in MS
    @GetMapping("/own")
    public ResponseEntity<List<Beat>> findAllOwnBeat(@Valid @RequestBody BeatDTO beatDTO) {
        return ResponseEntity.ok(this.beatService.findAllOwnBeat(beatDTO));
    }

    // List all Beats in US
    @GetMapping("")
    public ResponseEntity<List<Beat>> findAllBeat() {
        return ResponseEntity.ok(this.beatService.findAllBeat());
    }

    // Get detail Beat US and MS
    @GetMapping("/{id}")
    public ResponseEntity<BeatResponseDTO> findById(@PathVariable Long id){
        return ResponseEntity.ok(this.beatService.getDetail(id));
    }



    // Search Beat by Name
    @GetMapping("/name")
    public ResponseEntity<List<Beat>> searchByBeatName(@Valid @RequestBody BeatDTO beatDTO) {
        return ResponseEntity.ok(this.beatService.searchByBeatName(beatDTO));
    }

    // Search Beat by Musician
    @GetMapping("/musician")
    public ResponseEntity<List<Beat>> searchByMusician(@Valid @RequestBody BeatDTO beatDTO) {
        return ResponseEntity.ok(this.beatService.searchByMusician(beatDTO));
    }

    //Add Beat in MS
    @PostMapping({""})
    public ResponseEntity<String> uploadBeat(@Valid @RequestBody BeatDTO beatDTO) {
        return this.beatService.insertBeat(beatDTO);
    }

    //Update beat in MS
    @PutMapping({"/{id}"})
    public ResponseEntity<String> updateBeat(@Valid @RequestBody Beat newBeat, @PathVariable Long id) {
        return this.beatService.updateBeat(newBeat, id);
    }

    //like beat
    @PutMapping("/like/{id}")
    public  ResponseEntity<String> likeBeat(@PathVariable Long id){
        return beatService.likeBeat(id);
    }

    //delete beat by update status in MS
    @DeleteMapping({"/{id}"})
    public ResponseEntity<String> deleteBeat(@PathVariable Long id) {
        return this.beatService.deleteBeat(id);
    }

}
