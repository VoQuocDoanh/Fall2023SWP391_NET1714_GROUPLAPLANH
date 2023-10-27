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
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping(path = "/api/v1/song")
public class SongController {

    @Autowired
    private SongService songService;

    // Upload Song
    @PostMapping("/user")
    public ResponseEntity<String> uploadSong (@Valid @RequestBody SongDTO songDTO){
        return this.songService.uploadSong(songDTO);
    }

    // Update Song
    @PatchMapping("/user/{userid}")
    public ResponseEntity<String> updateSong (@Valid @RequestParam("songid") Long songid , @Valid @RequestBody SongDTO songDTO, @Valid @PathVariable Long userid){
        return this.songService.updateSong(songDTO, userid, songid);
    }

    // Delete Song
    @DeleteMapping("/user/{userid}")
    public ResponseEntity<String> deleteSong (@Valid @RequestParam("songid") Long songid, @Valid @PathVariable Long userid){
        return this.songService.deleteSong(songid, userid);
    }

    // List all User Song
    @GetMapping("/user/{userid}")
    public ResponseEntity<List<SongResponseDTO>> findAllUserSong(@Valid @PathVariable Long userid){
        return ResponseEntity.ok(this.songService.findAllUserSong(userid));
    }

    // Search User Song by name
    @GetMapping("/user/{userid}/name")
    public ResponseEntity<List<SongResponseDTO>> findUserSongbySongName(@Valid @RequestParam("songname") String name, @Valid @PathVariable Long userid){
        return ResponseEntity.ok(this.songService.findUserSongbySongName(name, userid));
    }

    // Search User Song by genre
    @GetMapping("/user/{userid}/genre")
    public ResponseEntity<List<SongResponseDTO>> findUserSongByGenreName(@Valid @RequestParam("genrename") String genreName, @Valid @PathVariable Long userid){
        return ResponseEntity.ok(this.songService.findUserSongByGenre(genreName, userid));
    }

    // List all Song
    @GetMapping("")
    public ResponseEntity<List<SongResponseDTO>> findAllSong (){
        return ResponseEntity.ok(this.songService.listAllSong());
    }

    // Get detail Song
    @GetMapping("/{songid}")
    public ResponseEntity<SongResponseDTO> getDetailsSong (@Valid @PathVariable Long songid){
        return ResponseEntity.ok(this.songService.getDetailSong(songid));
    }

    // Search Song by genre
    @GetMapping("/genre")
    public ResponseEntity<List<SongResponseDTO>> findSongByGenre(@Valid @RequestParam("genrename") String genreName){
        return ResponseEntity.ok(this.songService.findSongByGenre(genreName));
    }

    // Search Song by name
    @GetMapping("/name")
    public ResponseEntity<List<SongResponseDTO>> findSongByName(@Valid @RequestParam("songname") String songname){
        return ResponseEntity.ok(this.songService.findSongByName(songname));
    }

    @GetMapping("/userupload")
    public ResponseEntity<List<SongResponseDTO>> findSongByUserUploadName(@Valid @RequestParam("fullname") String username){
        return ResponseEntity.ok(this.songService.findSongByUserName(username));
    }

    // Like Song
    @PostMapping("/like")
    public  ResponseEntity<String> likeBeat(@Valid @RequestParam("userid") Long userid, @Valid @RequestParam("songid") Long songid){
        return this.songService.likeSong(userid, songid);
    }

    // Rate Song
    @PostMapping("/rate")
    public ResponseEntity<String> rateSong (@Valid @RequestParam("userid") Long userid, @Valid @RequestParam("songid") Long songid, @Valid @RequestParam("rating") int rating){
        return this.songService.rateSong(userid, songid, rating);
    }
}
