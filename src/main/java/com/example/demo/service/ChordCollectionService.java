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
import java.util.Set;

@Service
public class ChordCollectionService {

    @Autowired
    private ChordCollectionRepository chordCollectionRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ChordBasicRepository chordRepository;

    public List<ChordCollection> findAllColletion(ChordCollectionDTO chordCollectionDTO) {
        User userEntity = userRepository.findByUsername(chordCollectionDTO.getUsername());
        List<ChordCollection> collection = chordCollectionRepository.findAll();
        if (userEntity == null) {
            return null;
        } else {
            List<ChordCollection> collectionEntity = new ArrayList<>();
            for (int i = 0; i < collection.size(); i++) {
                //userCollection is username in User Entity
                User t = collection.get(i).getUserCollection();
                if (t!=null && t.getId().equals(userEntity.getId())) {
                    ChordCollection ownCollection = new ChordCollection(
                            collection.get(i).getId(),
                            collection.get(i).getName(),
                            collection.get(i).getDescription(),
                            collection.get(i).getStatus(),
                            collection.get(i).getCreatedAt());
                    collectionEntity.add(ownCollection);
                }
            }
            return collectionEntity;
        }
    }

    public ChordCollection findById(Long id) {
        Optional<ChordCollection> foundChordCollection = chordCollectionRepository.findById(id);
        if (foundChordCollection.isEmpty()) {
            return null;
        } else {
            return chordCollectionRepository.findById(id).orElseThrow();
        }
    }

    public ResponseEntity<String> addToCollection(ChordCollectionDTO chordCollectionDTO) {
        User user = userRepository.findByUsername(chordCollectionDTO.getUsername());
        if (user == null) {
            return new ResponseEntity<>("User not found", HttpStatus.NOT_FOUND);
        } else {
            Optional<User> foundUser = Optional.ofNullable(userRepository.findByUsername(user.getUsername()));
            if (foundUser.isEmpty()) {
                return new ResponseEntity<>("Add failed", HttpStatus.NOT_IMPLEMENTED);
            } else {
                if (chordCollectionDTO.getFlag().equals("Create new collection")) {
                    ChordCollection collection = new ChordCollection();
                    Set<ChordBasic> chords = collection.getChords();
                    for (Long chordId : chordCollectionDTO.getChordId()) {
                        ChordBasic chord = chordRepository.findByChordId(chordId);
                        if (chord != null) {
                            chords.add(chord);
                        }
                    }
                    collection.setName(chordCollectionDTO.getName());
                    collection.setStatus(0);
                    collection.setDescription(chordCollectionDTO.getDescription());
                    collection.setChords(chords);
                    collection.setUserCollection(foundUser.get());
                    collection.setChords(chords);
                    chordCollectionRepository.save(collection);

                } else {
                    Optional<ChordCollection> findCollection=chordCollectionRepository.findByName(chordCollectionDTO.getName());
                    ChordCollection collection=findCollection.get();
                    Set<ChordBasic> chords=findCollection.get().getChords();
                    for (Long chordId : chordCollectionDTO.getChordId()) {
                        ChordBasic chord = chordRepository.findByChordId(chordId);
                        if (chord != null) {
                            chords.add(chord);
                        }
                    }
                    collection.setChords(chords);
                    chordCollectionRepository.save(collection);
                }
                return new ResponseEntity<>("Add successfully", HttpStatus.OK);
            }
        }
    }


    public ResponseEntity<String> removeChord(ChordCollectionDTO chordCollectionDTO) {
        User user = userRepository.findByUsername(chordCollectionDTO.getUsername());
        if (user == null) {
            return new ResponseEntity<>("User not found", HttpStatus.NOT_FOUND);
        } else {
            Optional<ChordCollection> findCollection=chordCollectionRepository.findByName(chordCollectionDTO.getName());
            ChordCollection collection=findCollection.get();
            Set<ChordBasic> chords=findCollection.get().getChords();
            for (Long chordId : chordCollectionDTO.getChordId()) {
                ChordBasic chord = chordRepository.findByChordId(chordId);
                if (chord != null) {
                    chords.remove(chord);
                }
            }
            collection.setChords(chords);
            chordCollectionRepository.save(collection);

        }
        return new ResponseEntity<>("Remove successfully", HttpStatus.OK);

    }


    public ResponseEntity<String> deleteCollection(ChordCollectionDTO chordCollectionDTO) {
        User user = userRepository.findByUsername(chordCollectionDTO.getUsername());
        if (user == null) {
            return new ResponseEntity<>("User not found", HttpStatus.NOT_FOUND);
        } else {
            Optional<ChordCollection> findCollection=chordCollectionRepository.findByName(chordCollectionDTO.getName());
            chordCollectionRepository.deleteById(findCollection.get().getId());
        }
        return new ResponseEntity<>("Delete successfully",HttpStatus.OK);
    }

}
