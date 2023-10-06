package com.example.demo.controller;

import com.example.demo.entity.Genre;
import com.example.demo.service.GenreService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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

}
