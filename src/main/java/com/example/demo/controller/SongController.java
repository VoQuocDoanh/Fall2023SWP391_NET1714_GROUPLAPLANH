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

@RestController
@RequestMapping(path = "/api/v1/song")
public class SongController {

    @Autowired
    private SongService songService;

    // Upload Song in US
    @PostMapping("")
    public ResponseEntity<String> uploadSong (@Valid @RequestBody SongDTO songDTO){
        return this.songService.insertSong(songDTO);
    }

    // List all Song in US
    @GetMapping("")
    public ResponseEntity<List<SongResponseDTO>> findAllSong (){
        return ResponseEntity.ok(this.songService.listAllSong());
    }

    // Get detail Song in US
    @GetMapping("/{id}")
    public ResponseEntity<SongResponseDTO> getDetailsSong (@PathVariable Long id){
        return ResponseEntity.ok(this.songService.getDetailsSong(id));
    }

    // List all own Song
    @GetMapping("/own/{id}")
    public ResponseEntity<List<SongResponseDTO>> findAllOwnSong (@PathVariable Long id){
        return ResponseEntity.ok(this.songService.findAllOwnSong(id));
    }


}
