package com.example.demo.service;

import com.example.demo.dto.*;
import com.example.demo.entity.*;
import com.example.demo.repository.ChordBasicRepository;
import com.example.demo.repository.GenreRepository;
import com.example.demo.repository.SongRepository;
import com.example.demo.repository.UserRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;
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

    private UserResponeDTO getUser(User user){
        return new UserResponeDTO(user.getId(), user.getFullName());
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

    @NotNull
    private List<SongResponseDTO> getSongResponseDTOS(Optional<User> foundUser, List<Song> songs) {
        List<SongResponseDTO> dtos = new ArrayList<>();
        for(Song value: songs){
            SongResponseDTO dto = new SongResponseDTO(value.getId(),
                    value.getSongname(),
                    value.getAuthor(),
                    value.getCreatedAt().toString(),
                    new UserResponeDTO(foundUser.get().getFullName()));
            dtos.add(dto);
        }
        return dtos;
    }

    @Nullable
    private List<SongResponseDTO> getSongResponseDTOS(List<Song> songs) {
        if(songs.isEmpty()){
            return null;
        }else {
            List<SongResponseDTO> songResponseDTOS = new ArrayList<>();
            for (Song value: songs) {
                SongResponseDTO dto = new SongResponseDTO(value.getId(),
                        value.getSongname(),
                        value.getAuthor(),
                        value.getCreatedAt().toString(),
                        getUser(value.getUserUploadSong()));
                songResponseDTOS.add(dto);
            }
            return songResponseDTOS;
        }
    }

    // CUD
    public ResponseEntity<String> insertSong(SongDTO songDTO) {
        Optional<User> foundUser = Optional.ofNullable(this.userRepository.findByUsername(songDTO.getUsername()));
        if (foundUser.isPresent()) {
            Song song = new Song(songDTO.getSongName(),
                    songDTO.getAuthor(),
                    songDTO.getTone(),
                    songDTO.getDescription(),
                    songDTO.getVocalRange(),
                    songDTO.getSongUrl(),
                    foundUser.get(),
                    genreSet(songDTO),
                    chordBasicSet(songDTO),
                    1);
            this.songRepository.save(song);
            return new ResponseEntity<>("Upload Successfully", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("User not found", HttpStatus.NOT_FOUND);
        }
    }

    public ResponseEntity<String> updateSong(SongDTO songDTO, Long id) {
        Optional<User> foundUser = Optional.ofNullable(this.userRepository.findByUsername(songDTO.getUsername()));
        if (foundUser.isPresent()) {
            Optional<Song> foundSong = this.songRepository.findById(id);
            if(foundSong.isPresent()){
                Song song = foundSong.get();
                song.setSongname(songDTO.getSongName());
                song.setAuthor(songDTO.getAuthor());
                song.setTone(songDTO.getTone());
                song.setDescription(songDTO.getDescription());
                song.setVocalRange(songDTO.getVocalRange());
                song.setSongUrl(songDTO.getSongUrl());
                song.setUserUploadSong(foundUser.get());
                song.setGenresofsong(genreSet(songDTO));
                song.setChordsofsong(chordBasicSet(songDTO));
                this.songRepository.save(song);
                return new ResponseEntity<>("Update Successfully", HttpStatus.OK);
            } else {
                return new ResponseEntity<>("Update Failed", HttpStatus.NOT_IMPLEMENTED);
            }
        }
        return new ResponseEntity<>("User not found", HttpStatus.NOT_FOUND);
    }

    public ResponseEntity<String> deleteSong(Long id){
        Optional<Song> foundSong = this.songRepository.findById(id);
        if (foundSong.isPresent()) {
            Song song = foundSong.get();
            song.setStatus(0);
            this.songRepository.save(song);
            return new ResponseEntity<>("Delete Successfully", HttpStatus.OK);
        }
        return new ResponseEntity<>("Delete Failed", HttpStatus.NOT_IMPLEMENTED);
    }

    // User Song
    public List<SongResponseDTO> findAllUserSong(Long id) {
        Optional<User> foundUser = this.userRepository.findById(id);
        if (foundUser.isPresent()) {
            List<Song> songs = this.songRepository.findUserSongByUserUploadSong(foundUser.get().getId());
            return getSongResponseDTOS(foundUser, songs);
        }else {
            return null;
        }
    }

    public List<SongResponseDTO> findUserSongbyName(String name, Long id){
        Optional<User> foundUser = this.userRepository.findById(id);
        if(foundUser.isPresent()){
            List<Song> songs = this.songRepository.findUserSongByName(name, foundUser.get().getId());
            return getSongResponseDTOS(foundUser, songs);
        }else {
            return null;
        }
    }

    public List<SongResponseDTO> findUserSongByGenreName(String name, Long id){
        List<Song> songs = this.songRepository.findUserSongByGenreName(name, id);
        if (songs.isEmpty()){
            return null;
        } else {
            return getSongResponseDTOS(songs);
        }
    }

    // Song
    public SongResponseDTO getDetailsSong(Long id) {
        Optional<Song> foundSong = this.songRepository.findById(id);
        if (foundSong.isPresent()) {
            Song s = foundSong.get();
            SongResponseDTO dto = new SongResponseDTO();
            dto.setId(s.getId());
            dto.setSongName(s.getSongname());
            dto.setAuthor(s.getAuthor());
            dto.setTone(s.getTone());
            dto.setDescription(s.getDescription());
            dto.setVocalRange(s.getVocalRange());
            dto.setSongUrl(s.getSongUrl());
            dto.setUser(getUser(s.getUserUploadSong()));
            dto.setCreateAt(s.getCreatedAt().toString());
            dto.setGenres(getGenres(s.getId()));
            dto.setChords(getChords(s.getId()));
            return dto;
        } else {
            return null;
        }
    }
    public List<SongResponseDTO> listAllSong() {
        List<Song> songs = this.songRepository.findAllSong();
        List<SongResponseDTO> responseDTOS = new ArrayList<>();
        if (songs.isEmpty()) {
            return null;
        } else {
            for (Song s : songs) {
                SongResponseDTO dto = new SongResponseDTO(s.getId(),
                        s.getSongname(), s.getAuthor(),
                        s.getCreatedAt().toString(),
                        getUser(s.getUserUploadSong()));
                responseDTOS.add(dto);
            }
            return responseDTOS;
        }
    }
    public List<SongResponseDTO> findSongByGenre(String name){ // sửa lại theo json
        List<Song> songs = this.songRepository.findSongsByGenreName(name);
        return getSongResponseDTOS(songs);
    }
    public List<SongResponseDTO> findSongByName (String name){
        List<Song> songs = this.songRepository.findSongsbyName(name);
        return getSongResponseDTOS(songs);
    }


}

