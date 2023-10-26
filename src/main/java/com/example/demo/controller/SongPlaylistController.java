package com.example.demo.controller;

import com.example.demo.dto.PlaylistDTO;
import com.example.demo.dto.PlaylistResponseDTO;
import com.example.demo.service.SongPlaylistService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "api/v1/playlist")
public class SongPlaylistController {

    @Autowired
    private SongPlaylistService songPlaylistService;

    // create Playlist
    @PostMapping
    public ResponseEntity<String> createPlaylist (@Valid @RequestBody PlaylistDTO playlistDTO){
        return this.songPlaylistService.createPlaylist(playlistDTO);
    }

    // update Playlist
    @PatchMapping("/user/{id}")
    public ResponseEntity<String> updatePlaylist (@Valid @PathVariable Long id, @Valid @RequestBody PlaylistDTO playlistDTO){
        return this.songPlaylistService.updatePlaylist(id, playlistDTO);
    }

    // delete Playlist
    @DeleteMapping("/user/{userid}/{name}")
    public ResponseEntity<String> deletePlaylist (@Valid @PathVariable Long userid,@Valid @PathVariable String name){
        return this.songPlaylistService.deletePlaylist(name, userid);
    }

    // view
    @GetMapping("/user/{userid}/{name}")
    public ResponseEntity<List<PlaylistResponseDTO>> viewList (@Valid @PathVariable Long userid, @Valid @PathVariable String name){
        return ResponseEntity.ok(this.songPlaylistService.viewall(userid, name));
    }
}
