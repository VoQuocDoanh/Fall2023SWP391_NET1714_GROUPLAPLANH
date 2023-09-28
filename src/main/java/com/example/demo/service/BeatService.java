//
// Source code recreated from a .class file by IntelliJ IDEA
// (powered by FernFlower decompiler)
//

package com.example.demo.service;

import com.example.demo.dto.BeatDTO;
import com.example.demo.entity.Beat;
import com.example.demo.entity.User;
import com.example.demo.repository.BeatRepository;
import com.example.demo.repository.UserRepository;
import com.example.demo.response.ResponseObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public interface BeatService {

    //get all own beat
    ResponseEntity<ResponseObject> findAllBeat(BeatDTO beatDTO);


    ResponseEntity<ResponseObject> insertBeat(BeatDTO beatDTO);

    ResponseEntity<ResponseObject> updateBeat(Beat newBeat, Long id);

    ResponseEntity<ResponseObject> deleteBeat(Beat newBeat, Long id);

    ResponseEntity<ResponseObject> findById(Long id);

    ResponseEntity<ResponseObject> searchByBeatName(BeatDTO beatDTO);
}
