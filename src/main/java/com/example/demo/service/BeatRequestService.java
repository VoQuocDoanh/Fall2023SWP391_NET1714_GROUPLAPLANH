package com.example.demo.service;

import com.example.demo.dto.BeatDTO;
import com.example.demo.dto.BeatRequestResponseDTO;
import com.example.demo.dto.BeatResponseDTO;
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
import org.springframework.web.multipart.MultipartFile;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class BeatRequestService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private GoogleCloudService service;

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

    public ResponseEntity<String> acceptRequest(BeatRequestResponseDTO dto) {
        Optional<BeatRequest> found = beatRequestRepository.findById(dto.getId());
        if (found.isPresent()) {
            found.get().setPrice(dto.getPrice());
            found.get().setStatus(1);
            beatRequestRepository.save(found.get());
            return new ResponseEntity<>("Accept request!", HttpStatus.OK);
        }
        return null;
    }

    public ResponseEntity<String> acceptPrice(BeatRequestResponseDTO dto) {
        Optional<BeatRequest> found = beatRequestRepository.findById(dto.getId());
        if (found.isPresent()) {
            found.get().setStatus(2);
            beatRequestRepository.save(found.get());
            return new ResponseEntity<>("Accept price!", HttpStatus.OK);
        }
        return null;
    }

    public ResponseEntity<String> acceptBeat(BeatRequestResponseDTO dto) {
        Optional<BeatRequest> found = beatRequestRepository.findById(dto.getId());
        if (found.isPresent()) {
            found.get().setStatus(-1);
            beatRequestRepository.save(found.get());
            return new ResponseEntity<>("Accept price!", HttpStatus.OK);
        }
        return null;
    }

    public ResponseEntity<String> rejectRequest(BeatRequestResponseDTO dto) {
        Optional<BeatRequest> found = beatRequestRepository.findById(dto.getId());
        if (found.isPresent()) {
            found.get().setStatus(-3);
            beatRequestRepository.save(found.get());
            return new ResponseEntity<>("Accept price!", HttpStatus.OK);
        }
        return null;
    }

    public ResponseEntity<String> rejectBeat(BeatRequestResponseDTO dto) {
        Optional<BeatRequest> found = beatRequestRepository.findById(dto.getId());
        if (found.isPresent()) {
            found.get().setStatus(-2);
            beatRequestRepository.save(found.get());
            return new ResponseEntity<>("Accept price!", HttpStatus.OK);
        }
        return null;
    }

    private String extractObjectNameFromUrl(String fullUrl) {
        if (fullUrl.startsWith("https://storage.googleapis.com/mychordproject/")) {
            int startIndex = "https://storage.googleapis.com/mychordproject/".length();
            return fullUrl.substring(startIndex);
        }
        return null;
    }
    public ResponseEntity<String> sendBeat(MultipartFile sound, MultipartFile sound2, BeatRequestResponseDTO dto) {
        Optional<BeatRequest> found = beatRequestRepository.findById(dto.getId());
        Optional<User> foundUser = userRepository.findById(dto.getMsId());
        if (found.isPresent()){

            if (sound != null) {

                String pathfull = service.uploadFile(sound, foundUser.get().getId(), "audio", "full", found.get().getObjectName());
                String objectfull = extractObjectNameFromUrl(pathfull);
                found.get().setBeatSoundFull(objectfull);
                found.get().setObjectName(objectfull);
            }
            if (sound2 != null) {
                String pathdemo = service.uploadFile(sound2, foundUser.get().getId(), "audio", "demo", found.get().getObjectNameDemo());
                String objectdemo = extractObjectNameFromUrl(pathdemo);
                found.get().setBeatSoundDemo(pathdemo);
                found.get().setObjectNameDemo(objectdemo);

            }
            found.get().setStatus(3);
            beatRequestRepository.save(found.get());
            return new ResponseEntity<>("Send!",HttpStatus.OK);
        }
        return null;
    }
}