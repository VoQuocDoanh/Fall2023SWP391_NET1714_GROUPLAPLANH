package com.example.demo.controller;

import com.example.demo.dto.BeatRequestResponseDTO;
import com.example.demo.entity.BeatRequest;
import com.example.demo.service.BeatRequestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
    @RequestMapping(path = {"/api/v1/request/beat"})
public class BeatRequestController {
    @Autowired
    private BeatRequestService service;

    @PostMapping()
    public ResponseEntity<String> addNewRequest(@RequestBody BeatRequestResponseDTO dto){
        return service.addNew(dto);
    }
}