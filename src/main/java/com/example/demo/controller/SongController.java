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
    public ResponseEntity<String> uploadSong (@RequestBody SongDTO songDTO){
        return this.songService.uploadSong(songDTO);
    }

    // Update Song
    @PatchMapping("/user/{userid}")
    public ResponseEntity<String> updateSong (@RequestParam("songid") Long songid , @RequestBody SongDTO songDTO, @PathVariable Long userid){
        return this.songService.updateSong(songDTO, userid, songid);
    }

    // Delete Song
    @DeleteMapping("/user/{userid}")
    public ResponseEntity<String> deleteSong (@RequestParam("songid") Long songid, @PathVariable Long userid){
        return this.songService.deleteSong(songid, userid);
    }

    // List all Customer Song
    @GetMapping("/user/{userid}")
    public ResponseEntity<List<SongResponseDTO>> findAllUserSong(@Valid @PathVariable Long userid){
        return ResponseEntity.ok(this.songService.findAllUserSong(userid));
    }

    // Search Customer Song by name
    @GetMapping("/user/{userid}/name")
    public ResponseEntity<List<SongResponseDTO>> findUserSongbySongName(@RequestParam("songname") String name, @PathVariable Long userid){
        return ResponseEntity.ok(this.songService.findUserSongbySongName(name, userid));
    }

    // Search Customer Song by genre
    @GetMapping("/user/{userid}/genre")
    public ResponseEntity<List<SongResponseDTO>> findUserSongByGenreName(@RequestParam("genrename") String genreName, @Valid @PathVariable Long userid){
        return ResponseEntity.ok(this.songService.findUserSongByGenre(genreName, userid));
    }

    // List all Song
    @GetMapping("")
    public ResponseEntity<List<SongResponseDTO>> findAllSong (){
        return ResponseEntity.ok(this.songService.listAllSong());
    }

    // Get detail Song
    @GetMapping("/{songid}")
    public ResponseEntity<SongResponseDTO> getDetailsSong (@PathVariable Long songid){
        return ResponseEntity.ok(this.songService.getDetailSong(songid));
    }

    // Search Song by genre
    @GetMapping("/genre")
    public ResponseEntity<List<SongResponseDTO>> findSongByGenre(@RequestParam("genrename") String genreName){
        return ResponseEntity.ok(this.songService.findSongByGenre(genreName));
    }

    // Search Song by name
    @GetMapping("/name")
    public ResponseEntity<List<SongResponseDTO>> findSongByName(@RequestParam("songname") String songname){
        return ResponseEntity.ok(this.songService.findSongByName(songname));
    }

    @GetMapping("/userupload")
    public ResponseEntity<List<SongResponseDTO>> findSongByUserUploadName(@RequestParam("fullname") String username){
        return ResponseEntity.ok(this.songService.findSongByUserName(username));
    }

    // Like Song
    @GetMapping("/like")
    public  ResponseEntity<String> likeSong(@RequestParam("userid") Long userid, @RequestParam("songid") Long songid){
        return this.songService.likeSong(userid, songid);
    }

    // Rate Song
    @GetMapping("/rate")
    public ResponseEntity<String> rateSong (@RequestParam("userid") Long userid, @RequestParam("songid") Long songid, @RequestParam("rating") int rating){
        return this.songService.rateSong(userid, songid, rating);
    }
}
