package com.example.demo.controller;

import com.example.demo.entity.ChordCollection;
import com.example.demo.repository.ChordCollectionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(path = "/chordCollection")
public class ChordCollectionController {
    @Autowired
    ChordCollectionRepository chordCollectionRepository;

    @GetMapping("")
    public List<ChordCollection> getAllCollection(){
        return chordCollectionRepository.findAll();
    }
  /*
    @GetMapping("/{id}")
    public */
}
