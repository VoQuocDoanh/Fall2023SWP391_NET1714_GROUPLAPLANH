package com.example.demo.controller;

import com.example.demo.dto.Feedback;
import com.example.demo.dto.FeedbackDTO;
import com.example.demo.dto.FeedbackResponseDTO;
import com.example.demo.dto.PaginationResponseDTO;
import com.example.demo.service.FeedbackService;
import com.example.demo.service.SongService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/v1/beat/feedback")
public class FeedbackController {
    @Autowired
    private FeedbackService feedbackService;

    @GetMapping("/{id}/{page}")
    public PaginationResponseDTO viewFeedback(@PathVariable Long id, @PathVariable int page){
        return feedbackService.viewFeedback(id,page);
    }

    @PostMapping("")
    public ResponseEntity<String> addFeedback (@RequestBody FeedbackDTO dto){
        return feedbackService.addFeedback(dto);
    }

    @PutMapping("")
    public ResponseEntity<String> updateFeedBack (@RequestBody FeedbackDTO dto){
        return feedbackService.updateFeedback (dto);
    }
}
