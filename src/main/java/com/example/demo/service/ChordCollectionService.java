package com.example.demo.service;

import com.example.demo.dto.ChordCollectionDTO;
import com.example.demo.entity.ChordBasic;
import com.example.demo.entity.ChordCollection;
import com.example.demo.entity.User;
import com.example.demo.repository.ChordCollectionRepository;
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
public class ChordCollectionService {

    @Autowired
    private ChordCollectionRepository chordCollectionRepository;

    @Autowired
    private UserRepository userRepository;

    public ResponseEntity<ResponseObject> findAllColletion(ChordCollectionDTO chordCollectionDTO){
        User userEntity=userRepository.findByUsername(chordCollectionDTO.getUsername());
        List<ChordCollection> collection=chordCollectionRepository.findAll();
        if (userEntity==null){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(
                    new ResponseObject("FAILE","Not found User","")
            );
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
            return ResponseEntity.status(HttpStatus.OK).body(
                    new ResponseObject("TRUE","List succesfully",collectionEntity)
            );
        }
    }

    public ResponseEntity<ResponseObject> findById(Long id) {
        Optional<ChordCollection> foundChordCollection=chordCollectionRepository.findById(id);
        if (foundChordCollection.isEmpty()){
            return ResponseEntity.status(HttpStatus.OK).body(
                    new ResponseObject("TRUE","Querry product successfully","")
            );
        }else {
            return ResponseEntity.status(HttpStatus.OK).body(
                    new ResponseObject("TRUE","Querry product successfully",foundChordCollection)
            );
        }
    }

    public ResponseEntity<ResponseObject> createChordCollection(ChordCollectionDTO chordCollectionDTO) {
        User user=userRepository.findByUsername(chordCollectionDTO.getUsername());
        if (user==null){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(
                    new ResponseObject("FALSE","Not found User","")
            );
        }else{
            Optional<User> userEntity=userRepository.findUserByUsername(user.getUsername());
            if (userEntity.isPresent()){
                String name=chordCollectionDTO.getName();
                ChordCollection collection=new ChordCollection(name,0,userEntity.get());
                return ResponseEntity.status(HttpStatus.OK).body(
                        new ResponseObject("TRUE","Add collection successfully",chordCollectionRepository.save(collection))
                );
            } else{
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body(
                        new ResponseObject("FALSE","Fail to add","")

                );
            }
        }
    }
}
