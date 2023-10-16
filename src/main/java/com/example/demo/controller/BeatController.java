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
    @GetMapping("/user/{id}/all")
    public ResponseEntity<List<BeatResponseDTO>> findAllOwnBeat(@PathVariable Long id) {
        return ResponseEntity.ok(this.beatService.findAllOwnBeat(id));
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
    @GetMapping("/name/{name}")
    public ResponseEntity<List<BeatResponseDTO>> searchByBeatName(@PathVariable String name) {
        return ResponseEntity.ok(this.beatService.searchByBeatName(name));
    }

    // Search Beat by Musician
    @GetMapping("/musician/{name}")
    public ResponseEntity<List<BeatResponseDTO>> searchByMusician(@PathVariable String name) {
        return ResponseEntity.ok(this.beatService.searchByMusician(name));
    }

    //Add Beat in MS
    @PostMapping({""})
    public ResponseEntity<String> uploadBeat(@Valid @RequestBody BeatDTO beatDTO) {
        return this.beatService.insertBeat(beatDTO);
    }

    //Update beat in MS
    @PatchMapping({"/{id}"})
    public ResponseEntity<String> updateBeat(@Valid @RequestBody BeatDTO newBeat, @PathVariable Long id) {
        return this.beatService.updateBeat(newBeat, id);
    }

    //like beat
    @PostMapping("/like/{id1}/{id2}")
    public  ResponseEntity<String> likeBeat(@PathVariable Long id1, @PathVariable Long id2){
        return beatService.likeBeat(id1, id2);
    }

    //delete beat by update status in MS
    @DeleteMapping({"/{id}"})
    public ResponseEntity<String> deleteBeat(@PathVariable Long id) {
        return this.beatService.deleteBeat(id);
    }

}
