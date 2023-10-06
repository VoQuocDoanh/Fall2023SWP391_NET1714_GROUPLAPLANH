package com.example.demo.service;

import com.example.demo.dto.ChordResponseDTO;
import com.example.demo.dto.GenreResponseDTO;
import com.example.demo.dto.SongDTO;
import com.example.demo.dto.SongResponseDTO;
import com.example.demo.entity.*;
import com.example.demo.repository.ChordBasicRepository;
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

import java.util.*;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

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

    @Autowired
    private ChordBasicRepository chordBasicRepository;

    public List<SongResponseDTO> listAllSong() {
        List<Song> songs = this.songRepository.findAll();
        List<SongResponseDTO> responseDTOS = new ArrayList<>();
        if (songs.isEmpty()) {
            return null;
        } else {
            for (Song s : songs) {
                SongResponseDTO dto = new SongResponseDTO(s.getId(), s.getSongname(), s.getAuthor());
                responseDTOS.add(dto);
            }
            return responseDTOS;
        }
    }

    public SongResponseDTO getDetailsSong(Long id) {
        Optional<Song> foundSong = this.songRepository.findById(id);
        if (foundSong.isPresent()) {
            Song s = foundSong.get();
            SongResponseDTO responseDTO = new SongResponseDTO();
            responseDTO.setId(s.getId());
            responseDTO.setSongName(s.getSongname());
            responseDTO.setAuthor(s.getAuthor());
            responseDTO.setTone(s.getTone());
            responseDTO.setDescription(s.getDescription());
            responseDTO.setVocalRange(s.getVocalRange());
            responseDTO.setSongUrl(s.getSongUrl());
            responseDTO.setUser(s.getUserUploadSong());
            responseDTO.setCreateAt(s.getCreatedAt().toString());
            responseDTO.setGenres(getGenres(s.getId()));
            responseDTO.setChords(getChords(s.getId()));
            return responseDTO;
        } else {
            return null;
        }
    }

    private List<GenreResponseDTO> getGenres(Long id) {
        List<String> genres = this.genreRepository.findBySongs(id);
        if (genres.isEmpty()) {
            return null;
        } else {
            List<GenreResponseDTO> genreList = new ArrayList<>();
            for (String value : genres) {
                Genre genre = this.genreRepository.findByName(value);
                genreList.add(new GenreResponseDTO(genre.getId(), genre.getName()));
            }
            return genreList;
        }
    }

    private List<ChordResponseDTO> getChords(Long id) {
        List<String> chords = this.chordBasicRepository.findBySongs(id);
        if (chords.isEmpty()) {
            return null;
        } else {
            List<ChordResponseDTO> chordResponseDTOS = new ArrayList<>();
            for (String value : chords) {
                ChordBasic basic = this.chordBasicRepository.findByChordKey(value);
                chordResponseDTOS.add(new ChordResponseDTO(basic.getChordId(),
                        basic.getChordName(),
                        basic.getImage(),
                        basic.getChordKey(),
                        basic.getSuffix(),
                        basic.getType()));
            }
            return chordResponseDTOS;
        }
    }

    public ResponseEntity<String> insertSong(SongDTO songDTO) {
        User user = this.userRepository.findByUsername(songDTO.getUsername());
        if (user == null) {
            return new ResponseEntity<>("User not found", HttpStatus.NOT_FOUND);
        } else {
            Optional<User> foundUser = Optional.ofNullable(this.userRepository.findByUsername(user.getUsername()));
            if (foundUser.isPresent()) {
                Song song = new Song();
                song.setSongname(songDTO.getSongName());
                song.setAuthor(songDTO.getAuthor());
                song.setTone(songDTO.getTone());
                song.setDescription(songDTO.getDescription());
                song.setVocalRange(songDTO.getVocalRange());
                song.setSongUrl(songDTO.getSongUrl());
                song.setUserUploadSong(foundUser.get());
                song.setGenresofsong(genreSet(songDTO));
                song.setChordsofsong(chordBasicSet(songDTO));
                song.setStatus(1);
                this.songRepository.save(song);
                return new ResponseEntity<>("Upload Successfully", HttpStatus.OK);
            } else {
                return new ResponseEntity<>("Upload Failed", HttpStatus.NOT_IMPLEMENTED);
            }
        }
    }

    private Set<ChordBasic> chordBasicSet(SongDTO songDTO) {
        String raw = songDTO.getDescription();
        Pattern pattern = Pattern.compile("\\[(.*?)\\]");
        Matcher matcher = pattern.matcher(raw);
        Set<String> scanned = new HashSet<>();
        while (matcher.find()) {
            scanned.add(matcher.group(1));
        }
        if (scanned.isEmpty()) {
            return null;
        } else {
            Set<ChordBasic> chords = new HashSet<>();
            for (String value : scanned) {
                ChordBasic basic = this.chordBasicRepository.findByChordKey(value);
                if (basic != null) {
                    chords.add(basic);
                }
            }
            return chords;
        }
    }

    private Set<Genre> genreSet(SongDTO songDTO) {
        Set<Genre> genres = new HashSet<>();
        for (String genreName : songDTO.getGenres()) {
            Genre genre = this.genreRepository.findByName(genreName);
            if (genre != null) {
                genres.add(genre);
            }
        }
        return genres;
    }

    public List<SongResponseDTO> findAllOwnSong(Long id) {
        Optional<User> foundUser = this.userRepository.findById(id);
        if (foundUser.isPresent()) {
            List<Song> songs = this.songRepository.findByUserUploadSong(foundUser.get().getId());
            List<SongResponseDTO> songResponseDTOS = new ArrayList<>();
            for (Song value: songs){
                SongResponseDTO dto = new SongResponseDTO(value.getId(), value.getSongname(), value.getAuthor());
                songResponseDTOS.add(dto);
            }
            return songResponseDTOS;
        }else {
            return null;
        }
    }


}

