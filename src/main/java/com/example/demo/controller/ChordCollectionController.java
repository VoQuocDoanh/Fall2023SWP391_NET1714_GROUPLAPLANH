package com.example.demo.controller;

import com.example.demo.dto.ChordCollectionDTO;
import com.example.demo.repository.ChordCollectionRepository;
import com.example.demo.response.ResponseObject;
import com.example.demo.service.ChordCollectionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path = "/chordCollection")
public class ChordCollectionController {
    @Autowired
    ChordCollectionRepository chordCollectionRepository;

    @Autowired
    ChordCollectionService chordCollectionService;

    //List own collection
    @GetMapping("")
    public ResponseEntity<ResponseObject> getAllCollection(@RequestBody ChordCollectionDTO chordCollectionDTO)
    {
        return chordCollectionService.findAllColletion(chordCollectionDTO);
    }

    @GetMapping("/{id}")
    public ResponseEntity<ResponseObject> findById(@PathVariable Long id){
        return chordCollectionService.findById(id);
    }

    @PostMapping("/AddChordCollection")
    public ResponseEntity<ResponseObject> createChordCollection(@RequestBody ChordCollectionDTO chordCollectionDTO){
        return chordCollectionService.createChordCollection(chordCollectionDTO);
    }

    @PostMapping("/AddtoChordCollection")
    public ResponseEntity<ResponseObject> addToChordCollection(@RequestBody ChordCollectionDTO chordCollectionDTO){
        return chordCollectionService.addToChordCollection(chordCollectionDTO);
    }

}
