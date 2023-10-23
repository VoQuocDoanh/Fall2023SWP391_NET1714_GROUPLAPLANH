package com.example.demo.service;

import com.example.demo.dto.*;
import com.example.demo.entity.Beat;
import com.example.demo.entity.Song;
import com.example.demo.entity.User;
import com.example.demo.repository.BeatRepository;
import com.example.demo.repository.FeedbackRepository;
import com.example.demo.repository.SongRepository;
import com.example.demo.repository.UserRepository;
import jakarta.annotation.Nullable;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class FeedbackService {
    @Autowired
    UserRepository userRepository;

    @Autowired
    BeatRepository beatRepository;

    @Autowired
    FeedbackRepository feedbackRepository;
    public ResponseEntity<String> addFeedback(FeedbackDTO dto) {
        Optional<User> foundUser = userRepository.findById(dto.getUserId());
        Optional<Beat> foundBeat = beatRepository.findById(dto.getBeatId());
        Optional<Feedback> found = feedbackRepository.findByBeatFeedbackAndUserFeedback(foundBeat.get(),foundUser.get());
        if (foundBeat.isPresent() && foundUser.isPresent()){
            Feedback feedback = new Feedback( dto.getContent(), foundUser.get(),foundBeat.get(),1);
            feedbackRepository.save(feedback);
            return new ResponseEntity<>("Feedback!",HttpStatus.OK);
        } else if (found.isPresent()) {
            return new ResponseEntity<>("Already feedback",HttpStatus.NOT_IMPLEMENTED);
        }
        return new ResponseEntity<>("Add failed!",HttpStatus.NOT_IMPLEMENTED);
    }


    public List<FeedbackResponseDTO> viewFeedback(Long id) {
        Optional<User> foundUser = userRepository.findById(id);
        List<Beat> beatList = beatRepository.findBeatSoldOut(foundUser.get().getId());
        List<Feedback> feedback =new ArrayList<>();
        for (Beat i : beatList){
            feedback.add(feedbackRepository.findByBeatFeedback(i));
        }

        return getFeedbackResponseDTO(feedback);

    }

    private UserResponeDTO getUser(User user){
        return new UserResponeDTO(user.getId(), user.getFullName());
    }
    private BeatResponseDTO getBeat(Beat beat){
        return new BeatResponseDTO(beat.getBeatName());
    }

    @Nullable
    private List<FeedbackResponseDTO> getFeedbackResponseDTO(List<Feedback> feedbacks){
        List<FeedbackResponseDTO> feedbackDTOS = new ArrayList<>();
        for (Feedback i : feedbacks){
            FeedbackResponseDTO dto = new FeedbackResponseDTO(
                    i.getContent(),
                    getUser(i.getUserFeedback()),
                    i.getCreatedAt(),
                    getBeat(i.getBeatFeedback())
            );
            feedbackDTOS.add(dto);
        }
        return feedbackDTOS;
    }

    public ResponseEntity<String> updateFeedback(FeedbackDTO dto) {
        Optional<Feedback> feedback = feedbackRepository.findById(dto.getId());
        if (feedback.isPresent()){
            feedback.get().setContent(dto.getContent());
            feedbackRepository.save(feedback.get());
            return new ResponseEntity<>("Updated!",HttpStatus.OK);
        }
        return new ResponseEntity<>("No update",HttpStatus.NOT_IMPLEMENTED);
    }


}
