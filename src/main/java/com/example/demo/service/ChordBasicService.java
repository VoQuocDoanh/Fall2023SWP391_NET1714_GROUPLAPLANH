package com.example.demo.service;

import com.example.demo.dto.ChordBasicResponseDTO;
import com.example.demo.dto.ChordDTO;
import com.example.demo.entity.ChordBasic;
import com.example.demo.repository.ChordBasicRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.apache.commons.codec.binary.Base64;

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
        List<ChordBasic> chordEntity=chordBasicRepository.findChord(key, suffix, type);
        if (chordEntity.isEmpty()){
            return null;
        } else {
            for (ChordBasic value : chordEntity) {
                value.setImage(Base64.decodeBase64(value.getImage()));
            }
            return chordEntity;
        }
    }
    
    public ResponseEntity<String> uploadChord(byte[] image ,ChordDTO chordDTO){
        Optional<ChordBasic> foundChord = Optional.ofNullable(this.chordBasicRepository.findByChordNameAndType(chordDTO.getName(), chordDTO.getType()));
        if(foundChord.isEmpty()){
            byte[] encodeImage = Base64.encodeBase64(image);
            ChordBasic basic = new ChordBasic(chordDTO.getName(),
                    encodeImage,
                    chordDTO.getKey(),
                    chordDTO.getSuffix(),
                    chordDTO.getScript(),
                    chordDTO.getType());
            this.chordBasicRepository.save(basic);
        return new ResponseEntity<>("Add được rồi đó Hiển", HttpStatus.OK);
        } else {
        return new ResponseEntity<>("Add ko được rồi, check lại database", HttpStatus.NOT_IMPLEMENTED);
        }
    }
}
