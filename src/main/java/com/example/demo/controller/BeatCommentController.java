package com.example.demo.controller;

import com.example.demo.dto.CommentResponseDTO;
import com.example.demo.dto.SongResponseDTO;
import com.example.demo.entity.Beat;
import com.example.demo.entity.BeatComment;
import com.example.demo.service.BeatCommentService;
import lombok.Getter;
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
    public List<CommentResponseDTO> viewComment(@PathVariable Long id){
        return service.viewComment(id);
    }

    @PostMapping("/addComment")
    public ResponseEntity<String> addComment(@RequestBody CommentResponseDTO commentResponseDTO){
        return service.addComment(commentResponseDTO);
    }

    @PutMapping("")
    public ResponseEntity<String> updateComment(@RequestBody CommentResponseDTO commentResponseDTO){
        return service.updateComment(commentResponseDTO);
    }

    @DeleteMapping("")
    public ResponseEntity<String> deleteComment(@RequestBody CommentResponseDTO commentResponseDTO){
        return service.deleteComment(commentResponseDTO);
    }
}
