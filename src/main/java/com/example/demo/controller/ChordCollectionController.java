package com.example.demo.controller;

import com.example.demo.dto.ChordCollectionDTO;
import com.example.demo.entity.ChordCollection;
import com.example.demo.repository.ChordCollectionRepository;
import com.example.demo.service.ChordCollectionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "/chordCollection")
public class ChordCollectionController {
    @Autowired
    ChordCollectionRepository chordCollectionRepository;

    @Autowired
    ChordCollectionService chordCollectionService;

    //List own collection
/*
    @GetMapping("")
    public ResponseEntity<List<ChordCollection>> getAllCollection(@RequestBody ChordCollectionDTO chordCollectionDTO)
    {
        return ResponseEntity.ok(chordCollectionService.findAllColletion(chordCollectionDTO));
    }
*/

    @GetMapping("/{id}")
    public ResponseEntity<ChordCollection> findById(@PathVariable Long id){
        return ResponseEntity.ok(chordCollectionService.findById(id));
    }

/*
    @PostMapping("/AddChordCollection")
    public ResponseEntity<String> createChordCollection(@RequestBody ChordCollectionDTO chordCollectionDTO){
        return chordCollectionService.createChordCollection(chordCollectionDTO);
    }
*/

   /* @PostMapping("/AddtoChordCollection")
    public ResponseEntity<ResponseObject> addToChordCollection(@RequestBody ChordCollectionDTO chordCollectionDTO){
        return chordCollectionService.addToChordCollection(chordCollectionDTO);
    }*/

}
