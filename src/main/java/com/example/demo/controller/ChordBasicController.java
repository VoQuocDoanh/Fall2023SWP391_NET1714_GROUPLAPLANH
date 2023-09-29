package com.example.demo.controller;

import com.example.demo.dto.ChordBasicDTO;
import com.example.demo.entity.ChordBasic;
import com.example.demo.repository.ChordBasicRepository;
import com.example.demo.response.ResponseObject;
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
    public ResponseEntity<ResponseObject> findById(@PathVariable Long id){
        return chordBasicService.findById(id);
    }

    @GetMapping(path="/searchChord")
    public ResponseEntity<ResponseObject> searchChord(@RequestBody ChordBasicDTO chordBasicDTO){
        return chordBasicService.searchChord(chordBasicDTO);
    }

}