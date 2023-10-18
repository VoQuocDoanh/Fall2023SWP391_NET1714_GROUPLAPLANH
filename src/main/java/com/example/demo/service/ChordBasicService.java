package com.example.demo.service;

import com.example.demo.dto.ChordBasicResponseDTO;
import com.example.demo.entity.ChordBasic;
import com.example.demo.repository.ChordBasicRepository;
import org.springframework.beans.factory.annotation.Autowired;
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

    public List<ChordBasic> searchChord(String key, String suffix, String type){
        List<ChordBasic> chordEntity=chordBasicRepository.findChord
                (key, suffix, type);
        if (chordEntity.isEmpty()){
            return null;
        } else{
            return chordEntity;
        }
    }
}
