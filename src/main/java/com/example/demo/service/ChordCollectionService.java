package com.example.demo.service;

import com.example.demo.dto.ChordCollectionDTO;
import com.example.demo.entity.ChordBasic;
import com.example.demo.entity.ChordCollection;
import com.example.demo.entity.User;
import com.example.demo.repository.ChordBasicRepository;
import com.example.demo.repository.ChordCollectionRepository;
import com.example.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class ChordCollectionService {

    @Autowired
    private ChordCollectionRepository chordCollectionRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ChordBasicRepository chordRepository;
/*
    public List<ChordCollection> findAllColletion(ChordCollectionDTO chordCollectionDTO){
        User userEntity=userRepository.findByUsername(chordCollectionDTO.getUsername());
        List<ChordCollection> collection=chordCollectionRepository.findAll();
        if (userEntity==null){
            return null;
        }else {
            List <ChordCollection> collectionEntity=new ArrayList<>();

            for (int i=0;i<collection.size(); i++){
                //userCollection is username in User Entity
                User t=collection.get(i).getUserCollection();
                if (t.getId().equals(userEntity.getId())){
                    ChordCollection ownCollection=new ChordCollection(
                            collection.get(i).getId(),
                            collection.get(i).getName(),
                            collection.get(i).getStatus(),
                            collection.get(i).getCreatedAt());
                    collectionEntity.add(ownCollection);
                }

            }
            return collectionEntity;
        }
    }*/

    public ChordCollection findById(Long id) {
        Optional<ChordCollection> foundChordCollection=chordCollectionRepository.findById(id);
        if (foundChordCollection.isEmpty()){
            return null;
        }else {
            return chordCollectionRepository.findById(id).orElseThrow();
        }
    }

   /* public ResponseEntity<String> createChordCollection(ChordCollectionDTO chordCollectionDTO) {
        User user=userRepository.findByUsername(chordCollectionDTO.getUsername());
        if (user==null){
            return new ResponseEntity<>("User not found",HttpStatus.NOT_FOUND);
        }else{
            Optional<User> userEntity=userRepository.findUserByUsername(user.getUsername());
            if (userEntity.isPresent()){
                String name=chordCollectionDTO.getName();
                ChordCollection collection=new ChordCollection(name,0,userEntity.get());
                return new ResponseEntity<>("Create succesfully",HttpStatus.OK);
            } else{
                return new ResponseEntity<>("Create failed", HttpStatus.NOT_IMPLEMENTED);
            }
        }
    }*/

    /*public ResponseEntity<ResponseObject> addToChordCollection(ChordCollectionDTO chordCollectionDTO) {
        Optional<ChordCollection> foundCollection=chordCollectionRepository.findById(chordCollectionDTO.getChordId());
        if (foundCollection.isPresent()){
            Optional<ChordBasic> chordEntity=chordRepository.findById(chordCollectionDTO.getChordId());
            List<ChordBasic> chordList=new ArrayList<>();
            chordList.add(chordEntity.get());
            Optional<ChordCollection> addChord=chordCollectionRepository.findById(chordCollectionDTO.getChordCollectionId())
                    .map((collection)->{
                        collection.setChords(chordList);
                        return (ChordCollection)chordCollectionRepository.save(collection);
                    });
            return ResponseEntity.status(HttpStatus.OK).body(
                    new ResponseObject("TRUE","Add to collection successfully","")
            );
        }else {
            return ResponseEntity.status(HttpStatus.OK).body(
                    new ResponseObject("TRUE","Add to collection successfully",""));
        }
    }*/
}
