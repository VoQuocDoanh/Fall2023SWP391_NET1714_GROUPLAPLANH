//
// Source code recreated from a .class file by IntelliJ IDEA
// (powered by FernFlower decompiler)
//

package com.example.demo.controller;

import com.example.demo.dto.SongDTO;
import com.example.demo.entity.Song;
import com.example.demo.service.SongService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "/api/v1/song")
public class SongController {

    @Autowired
    private SongService songService;

    // User upload song with chords
    @PostMapping("")
    public ResponseEntity<String> uploadSong (@Valid @RequestBody SongDTO songDTO){
        return this.songService.insertSong(songDTO);
    }

    @GetMapping("")
    public ResponseEntity<List<SongDTO>> getAllSongs (){
        return ResponseEntity.ok(this.songService.getAllSongs());
    }
}
