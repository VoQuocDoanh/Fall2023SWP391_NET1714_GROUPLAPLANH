package com.example.demo.controller;

import com.example.demo.dto.GenreDTO;
import com.example.demo.entity.Genre;
import com.example.demo.service.GenreService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = {"/api/v1/genre"})
public class GenreController {

    @Autowired
    private GenreService genreService;


    // List all genres
    @GetMapping("")
    public ResponseEntity<List<Genre>> getAllGenre(){
        return ResponseEntity.ok(this.genreService.findAllGenre());
    }

    @PostMapping("")
    public ResponseEntity<String> addGenre(@Valid @RequestBody GenreDTO genreDTO){
        return this.genreService.addGerne(genreDTO);
    }

}
