package com.example.demo.service;

import com.example.demo.dto.SongDTO;
import com.example.demo.entity.Genre;
import com.example.demo.entity.Song;
import com.example.demo.entity.User;
import com.example.demo.repository.GenreRepository;
import com.example.demo.repository.SongRepository;
import com.example.demo.repository.UserRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@Transactional
@RequiredArgsConstructor
@Slf4j
@Service
public class SongService {

    @Autowired
    private SongRepository songRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private GenreRepository genreRepository;

    // User upload song with chords
    public ResponseEntity<String> insertSong(SongDTO songDTO) {
        User user = this.userRepository.findByUsername(songDTO.getUsername());
        if (user == null){
            return new ResponseEntity<>("User not found", HttpStatus.NOT_FOUND);
        } else {
            Optional<User> foundUser = Optional.ofNullable(this.userRepository.findByUsername(user.getUsername()));
            if (foundUser.isPresent()){
                Song song = new Song();
                Set<Genre> genres = song.getGenres();
                for (String genreName : songDTO.getGenres()) {
                    Genre genre = genreRepository.findByName(genreName);
                    if (genre != null) {
                        genres.add(genre);
                    }
                }
                song.setSongname(songDTO.getSongName());
                song.setAuthor(songDTO.getAuthor());
                song.setTone(songDTO.getTone());
                song.setDescription(songDTO.getDescription());
                song.setVocalRange(songDTO.getVocalRange());
                song.setSongUrl(songDTO.getSongUrl());
                song.setUserUploadSong(foundUser.get());
                song.setGenres(genres);
                song.setStatus(1);
                this.songRepository.save(song);
                return new ResponseEntity<>("Upload Successfully", HttpStatus.OK);
            } else {
                return new ResponseEntity<>("Upload Failed", HttpStatus.NOT_IMPLEMENTED);
            }
        }
    }
    //

}
