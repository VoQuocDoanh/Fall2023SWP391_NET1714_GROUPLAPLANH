package com.example.demo.service;

import com.example.demo.dto.ChordBasicDTO;
import com.example.demo.entity.ChordBasic;
import com.example.demo.repository.ChordBasicRepository;
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

    public ChordBasic findById(Long id){
        Optional<ChordBasic> foundChord=chordBasicRepository.findById(id);
        if (foundChord.isEmpty()){
            return null;
        }else {
            return chordBasicRepository.findById(id).orElseThrow();
        }
    }


    public List<ChordBasic> searchChord(ChordBasicDTO chordDTO){
        List<ChordBasic> chordEntity=chordBasicRepository.findChord(chordDTO.getKey(),chordDTO.getSuffix(), chordDTO.getType());
        if (chordEntity.isEmpty()){
            return null;
        } else{
            return chordEntity;
        }
    }
}
