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
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Optional;

@Service
public class ChordBasicService {

    @Autowired
    private ChordBasicRepository chordBasicRepository;
    @Autowired
    private GoogleCloudService service;

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
                value.setImage(value.getImage());
            }
            return chordEntity;
        }
    }
    
    public ResponseEntity<String> uploadChord(MultipartFile image , ChordDTO chordDTO){
        Optional<ChordBasic> foundChord = Optional.ofNullable(this.chordBasicRepository.findByChordNameAndType(chordDTO.getName(), chordDTO.getType()));
        if(foundChord.isEmpty()){
            ChordBasic basic = new ChordBasic(chordDTO.getName(),
                    chordDTO.getKey(),
                    chordDTO.getSuffix(),
                    chordDTO.getScript(),
                    chordDTO.getType());
            this.chordBasicRepository.save(basic);
            String path = this.service.uploadFile(image, basic.getChordId(), "image", "full");
            basic.setImage(path);
            this.chordBasicRepository.save(basic);
        return new ResponseEntity<>("Add được rồi đó Hiển", HttpStatus.OK);
        } else {
        return new ResponseEntity<>("Add ko được rồi, check lại database", HttpStatus.NOT_IMPLEMENTED);
        }
    }
}
