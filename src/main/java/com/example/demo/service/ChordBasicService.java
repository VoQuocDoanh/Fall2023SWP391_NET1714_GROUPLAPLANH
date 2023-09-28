package com.example.demo.service;

import com.example.demo.entity.ChordBasic;
import com.example.demo.repository.ChordBasicRepository;
import com.example.demo.response.ResponseObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class ChordBasicService {
    @Autowired
    ChordBasicRepository chordBasicRepository;

    public ResponseEntity<ResponseObject> findById(Long id){
        Optional<ChordBasic> foundChord=chordBasicRepository.findById(id);
        if (foundChord.isEmpty()){
            return ResponseEntity.status(HttpStatus.OK).body(
                    new ResponseObject("TRUE","Querry product successfully","")
            );
        }else {
            return ResponseEntity.status(HttpStatus.OK).body(
                    new ResponseObject("TRUE","Querry product successfully",foundChord)
            );
        }
    }
}
