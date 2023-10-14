//
// Source code recreated from a .class file by IntelliJ IDEA
// (powered by FernFlower decompiler)
//

package com.example.demo.controller;

import com.example.demo.dto.SongDTO;
import com.example.demo.dto.SongResponseDTO;
import com.example.demo.service.SongService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.parameters.P;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin
@RestController
@RequestMapping(path = "/api/v1/song")
public class SongController {

    @Autowired
    private SongService songService;

    // Upload Song
    @PostMapping("")
    public ResponseEntity<String> uploadSong (@Valid @RequestBody SongDTO songDTO){
        return this.songService.insertSong(songDTO);
    }

    // Update Song
    @PatchMapping("/own/{id}")
    public ResponseEntity<String> updateSong (@Valid @RequestBody SongDTO songDTO, @PathVariable Long id){
        return this.songService.updateSong(songDTO, id);
    }

    // Delete Song
    @DeleteMapping("/own/{id}")
    public ResponseEntity<String> deleteSong (@PathVariable Long id){
        return this.songService.deleteSong(id);
    }

    // List all Song
    @GetMapping("")
    public ResponseEntity<List<SongResponseDTO>> findAllSong (){
        return ResponseEntity.ok(this.songService.listAllSong());
    }

    // Get detail Song
    @GetMapping("/{id}")
    public ResponseEntity<SongResponseDTO> getDetailsSong (@PathVariable Long id){
        return ResponseEntity.ok(this.songService.getDetailsSong(id));
    }

    // List all User Song
    @GetMapping("/user/{userid}")
    public ResponseEntity<List<SongResponseDTO>> findAllUserSong(@PathVariable Long userid){
        return ResponseEntity.ok(this.songService.findAllUserSong(userid));
    }

    // Search User Song by name
    @GetMapping("/user/{id}/{name}")
    public ResponseEntity<List<SongResponseDTO>> findUserSongbyName(@PathVariable String name, @PathVariable Long id){
        return ResponseEntity.ok(this.songService.findUserSongbyName(name, id));
    }

    // Search Song by genre and user
    @GetMapping("/user/{id}/genre/{name}")
    public ResponseEntity<List<SongResponseDTO>> findUserSongByGenreName(@PathVariable String name, @PathVariable Long id){
        return ResponseEntity.ok(this.songService.findUserSongByGenreName(name, id));
    }

    // Search Song by genre
    @GetMapping("/genre/{name}")
    public ResponseEntity<List<SongResponseDTO>> findSongByGenre(@PathVariable String name){
        return ResponseEntity.ok(this.songService.findSongByGenre(name));
    }

    // Search Song by name

    @GetMapping("/name/{name}")
    public ResponseEntity<List<SongResponseDTO>> findSongByName(@PathVariable String name){
        return ResponseEntity.ok(this.songService.findSongByName(name));
    }


}
