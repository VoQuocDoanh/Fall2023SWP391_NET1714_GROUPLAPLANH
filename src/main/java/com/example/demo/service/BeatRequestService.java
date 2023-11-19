package com.example.demo.service;

import com.example.demo.dto.BeatRequestResponseDTO;
import com.example.demo.entity.BeatRequest;
import com.example.demo.entity.MusicianRequest;
import com.example.demo.entity.SongReport;
import com.example.demo.entity.User;
import com.example.demo.repository.BeatRequestRepository;
import com.example.demo.repository.MusicianRequestRepository;
import com.example.demo.repository.UserRepository;
import org.checkerframework.checker.units.qual.A;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class BeatRequestService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private BeatRequestRepository beatRequestRepository;

    @Autowired
    private MusicianRequestRepository musicianRequestRepository;

    public ResponseEntity<String> addNew(BeatRequestResponseDTO dto) {
        Optional<User> foundUser = userRepository.findById(dto.getUserRequest());
        Optional<User> foundMs = userRepository.findById(dto.getMsId());

        BeatRequest beat = new BeatRequest(
                dto.getDescription(),
                foundUser.get()
        );
        beatRequestRepository.save(beat);
        List<BeatRequest> list = new ArrayList<>();
        list.add(beat);
        MusicianRequest ms = new MusicianRequest(
               foundMs.get(),
                list
        );
        musicianRequestRepository.save(ms);
        beat.setRequestId(ms);
        beatRequestRepository.save(beat);
        return new ResponseEntity<>("Created!", HttpStatus.OK);
    }
}
