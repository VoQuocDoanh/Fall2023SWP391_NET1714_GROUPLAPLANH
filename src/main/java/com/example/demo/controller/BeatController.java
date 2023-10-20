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
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
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

    //list beat bought in MS
    @GetMapping ("/musician/bought/{id}")
    public ResponseEntity<List<BeatResponseDTO>> beatSoldOut(@PathVariable Long id){
        return ResponseEntity.ok(beatService.beatSoldOut(id));
    }

    //income in MS
    @GetMapping ("musician/beatSoldOut/income/{id}")
    public ResponseEntity<Double> income(@PathVariable Long id){
        return beatService.income(id);
    }

    //Add Beat in MS
    @PostMapping({""})
    public ResponseEntity<String> uploadBeat(@Valid @RequestParam("file")MultipartFile sound, @Valid @RequestPart("json") BeatDTO beatDTO) {
        try {
            byte[] soundByte = sound.getBytes();
            return this.beatService.insertBeat(soundByte, beatDTO);
        } catch (IOException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_IMPLEMENTED);
        }

    }

    //Update beat in MS
    @PatchMapping({"/{id}"})
    public ResponseEntity<String> updateBeat(@Valid @RequestParam("file")MultipartFile sound, @Valid @RequestBody BeatDTO newBeat, @PathVariable Long id) {
        try {
            byte[] soundByte = sound.getBytes();
            return this.beatService.updateBeat(soundByte, newBeat, id);
        } catch (IOException e){
            return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_IMPLEMENTED);
        }

    }

    //like beat
    @PostMapping("/like/{id1}/{id2}")
    public  ResponseEntity<String> likeBeat(@PathVariable Long id1, @PathVariable Long id2){
        return beatService.likeBeat(id1, id2);
    }

    @PostMapping("/ratingStar/{id1}/{id2}")
    public ResponseEntity<String> ratingbeat (@PathVariable Long id1, @PathVariable Long id2, @RequestBody BeatDTO beatDTO){
        return beatService.ratingBeat(id1,id2, beatDTO);
    }

    //delete beat by update status in MS
    @DeleteMapping({"/{id}"})
    public ResponseEntity<String> deleteBeat(@PathVariable Long id) {
        return this.beatService.deleteBeat(id);
    }

    //list beat that user bought
    @GetMapping ("user/{id}")
    public ResponseEntity<List<BeatResponseDTO>> beatPurchased (@PathVariable Long id){
        return ResponseEntity.ok( this.beatService.beatPurchased(id));
    }

}
