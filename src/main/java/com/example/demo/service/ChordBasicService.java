package com.example.demo.service;

import com.example.demo.dto.ChordBasicDTO;
import com.example.demo.entity.ChordBasic;
import com.example.demo.repository.ChordBasicRepository;
import com.example.demo.response.ResponseObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ChordBasicService {
    @Autowired
    ChordBasicRepository chordBasicRepository;

    public ResponseEntity<ResponseObject> findById(Long id){
        Optional<ChordBasic> foundChord=chordBasicRepository.findById(id);
        if (foundChord.isEmpty()){
            return ResponseEntity.status(HttpStatus.OK).body(
                    new ResponseObject("FALSE","Not found","")
            );
        }else {
            return ResponseEntity.status(HttpStatus.OK).body(
                    new ResponseObject("TRUE","Querry product successfully",foundChord)
            );
        }
    }


    public ResponseEntity<ResponseObject> searchChord(ChordBasicDTO chordDTO){
        List<ChordBasic> chordEntity=chordBasicRepository.findChord(chordDTO.getKey(),chordDTO.getSuffix(), chordDTO.getType());
        if (chordEntity.isEmpty()){
            return ResponseEntity.status(HttpStatus.OK).body(
                    new ResponseObject("FALSE","Not found","")
            );
        } else{
            return ResponseEntity.status(HttpStatus.OK).body(
                    new ResponseObject("TRUE","Querry product successfully",chordEntity)
            );
        }
    }
}
