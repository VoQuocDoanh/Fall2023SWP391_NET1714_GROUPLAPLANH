package com.example.demo.controller;

import com.example.demo.dto.CommentBeatResponseDTO;
import com.example.demo.service.BeatCommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/v1/comment/beat")
@CrossOrigin(origins =  "*")
public class BeatCommentController {
    @Autowired
    private BeatCommentService service;

    @GetMapping("/{id}")
    public List<CommentBeatResponseDTO> viewComment(@PathVariable Long id){
        return service.viewComment(id);
    }

    @PostMapping("/addComment")
    public ResponseEntity<String> addComment(@RequestBody CommentBeatResponseDTO commentBeatResponseDTO){
        return service.addComment(commentBeatResponseDTO);
    }

    @PutMapping("")
    public ResponseEntity<String> updateComment(@RequestBody CommentBeatResponseDTO commentBeatResponseDTO){
        return service.updateComment(commentBeatResponseDTO);
    }

    @DeleteMapping("")
    public ResponseEntity<String> deleteComment(@RequestBody CommentBeatResponseDTO commentBeatResponseDTO){
        return service.deleteComment(commentBeatResponseDTO);
    }
}
