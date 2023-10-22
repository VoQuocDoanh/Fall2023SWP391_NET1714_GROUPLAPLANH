package com.example.demo.controller;

import com.example.demo.dto.BeatRatingDTO;
import com.example.demo.service.BeatRatingService;
import com.example.demo.service.BeatService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/v1/rate/beat")
@CrossOrigin(origins = "*")
public class BeatRatingController {
    @Autowired
    private BeatRatingService service;

    @PostMapping("/rating")
    public ResponseEntity<String> ratingBeat(@RequestBody BeatRatingDTO dto) {
        return service.addRating(dto);
    }
}
