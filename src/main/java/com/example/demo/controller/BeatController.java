//
// Source code recreated from a .class file by IntelliJ IDEA
// (powered by FernFlower decompiler)
//

package com.example.demo.controller;

import com.example.demo.dto.BeatDTO;
import com.example.demo.dto.BeatResponseDTO;
import com.example.demo.dto.PaginationResponseDTO;
import com.example.demo.service.BeatService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.parameters.P;
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
    @GetMapping("/user/{id}/all/{page}")
    public ResponseEntity<PaginationResponseDTO> findAllOwnBeat(@PathVariable Long id, @PathVariable int page) {
        return ResponseEntity.ok(this.beatService.findAllOwnBeat(id,page));
    }

    // List all Beats in US
    @GetMapping("/all/{page}")
    public ResponseEntity<PaginationResponseDTO> findAllBeat(@PathVariable int page) {
        return ResponseEntity.ok(this.beatService.findAllBeat(page));
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

    // Search Beat by Genre
    @GetMapping("/genre/{name}")
    public ResponseEntity<List<BeatResponseDTO>> searchByGenre(@PathVariable String name) {
        return ResponseEntity.ok(this.beatService.searchByGenre(name));
    }

    //list beat bought in MS
    @GetMapping ("/musician/bought/{id}/{page}")
    public ResponseEntity<PaginationResponseDTO> beatSoldOut(@PathVariable Long id, @PathVariable int page){
        return ResponseEntity.ok(beatService.listBeatSoldOut(id,page));
    }

    //income in MS
    @GetMapping ("musician/beatSoldOut/income/{id}")
    public ResponseEntity<Double> income(@PathVariable Long id){
        return beatService.income(id);
    }

    //Add Beat in MS
    @PostMapping({""})
    public ResponseEntity<String> uploadBeat(@Valid @RequestPart("file1")MultipartFile full,@Valid @RequestPart("file2")MultipartFile demo, @Valid @RequestPart("json") BeatDTO beatDTO) {
        return this.beatService.insertBeat(full, demo, beatDTO);
    }

    //Update beat in MS
    @PatchMapping({"/{id}"})
    public ResponseEntity<String> updateBeat(@Valid @RequestPart("file1")MultipartFile sound,@Valid @RequestPart("file2")MultipartFile sound2, @Valid @RequestPart("json") BeatDTO newBeat, @PathVariable Long id) {
            return this.beatService.updateBeat(sound, sound2, newBeat, id);
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

    //list beat that user bought
    @GetMapping ("user/{id}/{page}")
    public ResponseEntity<PaginationResponseDTO> beatPurchased (@PathVariable Long id,@PathVariable int page){
        return ResponseEntity.ok( this.beatService.listBeatPurchased(id,page));
    }

    @GetMapping("user/beat/{id}")
    public ResponseEntity<BeatResponseDTO> getBeatPurchasedDetail(@PathVariable Long id){
        return ResponseEntity.ok(this.beatService.getBeatPurchasedDetail(id));
    }

    @GetMapping("user/demo/{id}")
    public BeatResponseDTO getDemoSound(@PathVariable Long id){
        return beatService.getDemoBeat(id);
    }

    @GetMapping("user/full/{id}")
    public BeatResponseDTO getFullSound(@PathVariable Long id){
        return beatService.getFullBeat(id);
    }

    @GetMapping("musician/full")
    public List<String> getName(){
        return beatService.listAllMusician();
    }
}
