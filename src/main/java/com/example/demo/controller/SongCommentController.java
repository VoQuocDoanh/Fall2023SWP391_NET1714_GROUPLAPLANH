package com.example.demo.controller;

import com.example.demo.dto.CommentSongDTO;
import com.example.demo.dto.CommentSongResponseDTO;
import com.example.demo.service.SongCommentService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = {"/api/v1/comment"})
public class SongCommentController {

    @Autowired
    private SongCommentService songCommentService;

    @PostMapping
    public ResponseEntity<String> comment (@Valid @RequestBody CommentSongDTO dto){
        return this.songCommentService.commentSong(dto);
    }

    @PatchMapping("/{id}")
    public ResponseEntity<String> updateComment (@Valid @PathVariable Long id, @Valid @RequestBody CommentSongDTO dto){
        return this.songCommentService.updateComment(dto, id);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteComment (@Valid @PathVariable Long id,@Valid @RequestBody CommentSongDTO dto){
        return this.songCommentService.deleteComment(dto, id);
    }

    @GetMapping("/song/{id}")
    public ResponseEntity<List<CommentSongResponseDTO>> viewComment (@Valid @PathVariable Long songid){
        return ResponseEntity.ok(this.songCommentService.viewComment(songid));
    }
}
