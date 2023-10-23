package com.example.demo.controller;

import com.example.demo.dto.ChordBasicResponseDTO;
import com.example.demo.dto.ChordDTO;
import com.example.demo.entity.ChordBasic;
import com.example.demo.repository.ChordBasicRepository;
import com.example.demo.service.ChordBasicService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping(path="/chord")
public class ChordBasicController {

    @Autowired
    ChordBasicRepository chordBasicRepository;

    @Autowired
    ChordBasicService chordBasicService;
    @GetMapping(path = "")
    public List<ChordBasic> getAllChords(){
        return chordBasicRepository.findAll();
    }

    @GetMapping(path="/{id}")
    public ResponseEntity<ChordBasic> findById(@PathVariable Long id){
        return ResponseEntity.ok(chordBasicService.findById(id));
    }

    @GetMapping(path="/searchChord/{key}/{suffix}/{type}")
    public ResponseEntity<List<ChordBasic>> searchChord(@PathVariable String key, @PathVariable String suffix, @PathVariable String type){
        return ResponseEntity.ok(chordBasicService.searchChord(key,suffix,type));
    }

    @PostMapping("")
    public ResponseEntity<String> uploadChord(@RequestPart("file") MultipartFile image,@Valid @RequestPart("json") ChordDTO chordDTO){
        try {
            return this.chordBasicService.uploadChord(image.getBytes(), chordDTO);
        } catch (IOException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_IMPLEMENTED);
        }
    }
}
