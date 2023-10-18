package com.example.demo.controller;

import com.example.demo.dto.PlaylistDTO;
import com.example.demo.entity.SongPlaylist;
import com.example.demo.service.SongPlaylistService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path = "api/v1/playlist")
public class SongPlaylistController {

    @Autowired
    private SongPlaylistService songPlaylistService;

    // create Playlist
    @PostMapping("")
    public ResponseEntity<String> createPlaylist (@Valid @RequestBody PlaylistDTO playlistDTO){
        return this.songPlaylistService.createPlaylist(playlistDTO);
    }

    // update Playlist
    @PatchMapping("/own")
    public ResponseEntity<String> updatePlaylist (@Valid @RequestBody PlaylistDTO playlistDTO){
        return this.songPlaylistService.updatePlaylist(playlistDTO);
    }

    // delete Playlist
    @DeleteMapping("/own/{userid}/{name}")
    public ResponseEntity<String> deletePlaylist (@PathVariable Long userid, @PathVariable String name){
        return this.songPlaylistService.deletePlaylist(name, userid);
    }
}
