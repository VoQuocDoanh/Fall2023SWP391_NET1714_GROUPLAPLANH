package com.example.demo.service;

import com.example.demo.dto.BeatRequestRequestDTO;
import com.example.demo.dto.BeatRequestResponseDTO;
import com.example.demo.dto.BeatResponseDTO;
import com.example.demo.dto.UserResponeDTO;
import com.example.demo.entity.BeatRequest;
import com.example.demo.entity.MusicianRequest;
import com.example.demo.entity.User;
import com.example.demo.repository.BeatRequestRepository;
import com.example.demo.repository.MusicianRequestRepository;
import com.example.demo.repository.UserRepository;
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

    public ResponseEntity<String> addNew(BeatRequestRequestDTO dto) {
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

    public ResponseEntity<String> acceptRequest(BeatRequestRequestDTO dto) {
        Optional<BeatRequest> found = beatRequestRepository.findById(dto.getId());
        if (found.isPresent()) {
            found.get().setPrice(dto.getPrice());
            found.get().setStatus(1);
            beatRequestRepository.save(found.get());
            return new ResponseEntity<>("Accept request!", HttpStatus.OK);
        }
        return null;
    }

    public ResponseEntity<String> acceptPrice(BeatRequestRequestDTO dto) {
        Optional<BeatRequest> found = beatRequestRepository.findById(dto.getId());
        if (found.isPresent()) {
            found.get().setStatus(2);
            beatRequestRepository.save(found.get());
            return new ResponseEntity<>("Accept price!", HttpStatus.OK);
        }
        return null;
    }

    public ResponseEntity<String> acceptBeat(BeatRequestRequestDTO dto) {
        Optional<BeatRequest> found = beatRequestRepository.findById(dto.getId());
        if (found.isPresent()) {
            found.get().setStatus(-1);
            beatRequestRepository.save(found.get());
            return new ResponseEntity<>("Accept price!", HttpStatus.OK);
        }
        return null;
    }

    public ResponseEntity<String> rejectRequest(BeatRequestRequestDTO dto) {
        Optional<BeatRequest> found = beatRequestRepository.findById(dto.getId());
        if (found.isPresent()) {
            found.get().setStatus(-3);
            beatRequestRepository.save(found.get());
            return new ResponseEntity<>("Accept price!", HttpStatus.OK);
        }
        return null;
    }

    public ResponseEntity<String> rejectBeat(BeatRequestRequestDTO dto) {
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
    public ResponseEntity<String> sendBeat(MultipartFile sound, MultipartFile sound2, BeatRequestRequestDTO dto) {
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

    private UserResponeDTO getUser(User user){
        return new UserResponeDTO(user.getId(), user.getFullName());
    }

    private BeatRequestResponseDTO getBeatDTO(BeatRequest beat){
        BeatRequestResponseDTO dto = new BeatRequestResponseDTO(
                beat.getId(),
                getUser(beat.getUserRequest()),
                beat.getBeatName()
        );
        return dto;
    }

    public ResponseEntity<List<BeatRequestResponseDTO>> viewAllInCus(Long id){
        Optional<User> foundUser=userRepository.findById(id);
        if (foundUser.isPresent()){
            List<BeatRequest> list = beatRequestRepository.findAllByUserRequest(foundUser.get());
            List<BeatRequestResponseDTO> response = new ArrayList<>();
            for (BeatRequest i : list){
                response.add(getBeatDTO(i));
            }
            return new ResponseEntity<>(response,HttpStatus.OK);
        }
        return null;
    }

    public ResponseEntity<List<BeatRequestResponseDTO>> viewAllInMs(Long id){
        Optional<User> foundUser  = userRepository.findById(id);
        if (foundUser.isPresent()){
            List<MusicianRequest> listOrder  = musicianRequestRepository.findAllByMsRequest(foundUser.get());
            List<BeatRequestResponseDTO> list  =new ArrayList<>();
            for (MusicianRequest i :listOrder){
                BeatRequest b  = new BeatRequest();
                b = beatRequestRepository.findByRequestId(i);
                list.add(getBeatDTO(b));
            }
            return new ResponseEntity<>(list,HttpStatus.OK);
        }
        return null;
    }
}