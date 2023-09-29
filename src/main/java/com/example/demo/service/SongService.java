package com.example.demo.service;

import com.example.demo.dto.SongDTO;
import com.example.demo.entity.Song;
import com.example.demo.entity.User;
import com.example.demo.repository.SongRepository;
import com.example.demo.repository.UserRepository;
import com.example.demo.response.ResponseObject;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Optional;
@Transactional
@RequiredArgsConstructor
@Slf4j
@Service
public class SongService {

    @Autowired
    private SongRepository songRepository;

    @Autowired
    private UserRepository userRepository;

    // User upload song with chords
    public ResponseEntity<ResponseObject> insertSong(SongDTO songDTO) {
        User user = this.userRepository.findByUsername(songDTO.getUsername());
        if (user == null){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ResponseObject("BAD", "User doesn't exist", ""));
        } else {
            Optional<User> foundUser = Optional.ofNullable(this.userRepository.findByUsername(user.getUsername()));
            if (foundUser.isPresent()){
                Song song = new Song(songDTO.getSongName(),
                        songDTO.getAuthor(),
                        songDTO.getTone(),
                        songDTO.getDescription(),
                        songDTO.getVocalRange(),
                        songDTO.getSongUrl(),
                        foundUser.get(),
                        1);
                return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject("OK", "Uploading Succeeded", this.songRepository.save(song)));
            } else {
                return ResponseEntity.status(HttpStatus.NOT_IMPLEMENTED).body(new ResponseObject("ERROR", "Uploading Failed", ""));
            }
        }
    }

    //

}
