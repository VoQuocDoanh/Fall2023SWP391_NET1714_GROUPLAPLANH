package com.example.demo.service;

import com.example.demo.dto.BeatRatingDTO;
import com.example.demo.entity.Beat;
import com.example.demo.entity.BeatRating;
import com.example.demo.entity.User;
import com.example.demo.repository.BeatRatingRepository;
import com.example.demo.repository.BeatRepository;
import com.example.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BeatRatingService {
    @Autowired
    BeatRepository beatRepository;
    @Autowired
    UserRepository userRepository;
    @Autowired
    BeatRatingRepository beatRatingRepository;
    public ResponseEntity<String> addRating(Long userID, Long beatID,BeatRatingDTO dto) {
        Optional<Beat> beat = beatRepository.findById(beatID);
        Optional<User> user = userRepository.findById(userID);
        int total =0;
        BeatRating foundRating = beatRatingRepository.findBeatRatingByBeatRatingAndUserRatingBeat(beat.get(),user.get());
        if (foundRating!= null) {
            beatRatingRepository.delete(foundRating);
            List<BeatRating> rating = beatRatingRepository.findAllByBeatRating(beat.get());
            beat.get().setTotalRating(beat.get().getTotalRating() - 1);
            for (BeatRating i :rating)
                total = total + i.getRating();
            beat.get().setRating((double) total /beat.get().getTotalRating());
            beatRepository.save(beat.get());
        }
            BeatRating beatRating = new BeatRating(user.get(),beat.get(), dto.getRate());
            beat.get().setRating((beat.get().getRating() * beat.get().getTotalRating() + dto.getRate())/(beat.get().getTotalRating()+1));
            beat.get().setTotalRating(beat.get().getTotalRating() + 1);
            beatRatingRepository.save(beatRating);
            beatRepository.save(beat.get());
        return new ResponseEntity<>("Rating!", HttpStatus.OK);
    }

}
