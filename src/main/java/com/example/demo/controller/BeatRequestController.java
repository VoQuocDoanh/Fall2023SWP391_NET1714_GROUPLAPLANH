package com.example.demo.controller;

import com.example.demo.dto.BeatDTO;
import com.example.demo.dto.BeatRequestResponseDTO;
import com.example.demo.dto.BeatResponseDTO;
import com.example.demo.entity.BeatRequest;
import com.example.demo.service.BeatRequestService;
import com.example.demo.validationgroups.BeatValidation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
    @RequestMapping(path = {"/api/v1/request/beat"})
public class BeatRequestController {
    @Autowired
    private BeatRequestService service;

    @PostMapping("/new")
    public ResponseEntity<String> addNewRequest(@RequestBody BeatRequestResponseDTO dto){
        return service.addNew(dto);
    }
    @PutMapping("/request")
    public ResponseEntity<String> acceptRequest(@RequestBody BeatRequestResponseDTO dto){
        return service.acceptRequest(dto);
    }

    @PutMapping({"/price"})
    public ResponseEntity<String> acceptPrice(@RequestBody BeatRequestResponseDTO dto){
        return service.acceptPrice(dto);
    }

    @PutMapping({"/beat"})
    public ResponseEntity<String> acceptBeat(@RequestBody BeatRequestResponseDTO dto){
        return service.acceptBeat(dto);
    }

    @PutMapping({"/reject/request"})
    public ResponseEntity<String> rejectRequest(@RequestBody BeatRequestResponseDTO dto){
        return service.rejectRequest(dto);
    }

    @PutMapping({"/reject/beat"})
    public ResponseEntity<String> rejectBeat(@RequestBody BeatRequestResponseDTO dto){
        return service.rejectBeat(dto);
    }

    @PatchMapping({"/{id}"})
    public ResponseEntity<String> updateBeat(@RequestPart(value = "file1", required = false) MultipartFile sound, @RequestPart(value = "file2", required = false)MultipartFile sound2, @Validated(BeatValidation.UpdateBeat.class) @RequestPart("json")BeatRequestResponseDTO dto) {
        return this.service.sendBeat(sound, sound2, dto);
    }
}