package com.example.demo.controller;

import com.example.demo.dto.ChordBasicResponseDTO;
import com.example.demo.entity.ChordBasic;
import com.example.demo.repository.ChordBasicRepository;
import com.example.demo.service.ChordBasicService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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

    @GetMapping(path="/searchChord")
    public ResponseEntity<List<ChordBasic>> searchChord(@RequestBody ChordBasicResponseDTO chordBasicResponseDTO){
        return ResponseEntity.ok(chordBasicService.searchChord(chordBasicResponseDTO));
    }

}
