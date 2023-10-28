package com.example.demo.service;

import com.example.demo.dto.*;
import com.example.demo.entity.*;
import com.example.demo.repository.*;
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

    @Autowired
    private SongRatingRepository songRatingRepository;

    private UserResponeDTO getUser(User user) {
        return new UserResponeDTO(user.getId(), user.getFullName());
    }

    private List<GenreResponseDTO> getGenres(Long id) {
        List<String> genres = this.genreRepository.findBySongs(id);
        if (!genres.isEmpty()) {
            List<GenreResponseDTO> genreList = new ArrayList<>();
            for (String value : genres) {
                Genre genre = this.genreRepository.findByName(value);
                genreList.add(new GenreResponseDTO(genre.getId(), genre.getName()));
            }
            return genreList;
        }
        return null;
    }

    private List<ChordResponseDTO> getChords(Long id) {
        List<String> chords = this.chordBasicRepository.findBySong(id);
        if (chords.isEmpty()) {
            return null;
        } else {
            List<ChordResponseDTO> chordResponseDTOS = new ArrayList<>();
            for (String value : chords) {
                List<ChordBasic> basics = this.chordBasicRepository.findByChordName(value);
                if (!basics.isEmpty()) {
                    for (ChordBasic basic : basics) {
                        chordResponseDTOS.add(new ChordResponseDTO(basic.getChordId(),
                                basic.getChordName(),
                                basic.getImage(),
                                basic.getChordKey(),
                                basic.getSuffix(),
                                basic.getType(),
                                basic.getDescription()));
                    }
                }

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
            Set<ChordBasic> chords = new HashSet<>();
            for (String value : scanned) {
                List<ChordBasic> basics = this.chordBasicRepository.findByChordName(value);
                if (!basics.isEmpty()) {
                    chords.addAll(basics);
                }
            }
            return chords;
        }
        return null;
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
    private List<SongResponseDTO> getSongResponseDTOS(User foundUser, List<Song> songs) {
        List<SongResponseDTO> dtos = new ArrayList<>();
        for (Song value : songs) {
            SongResponseDTO dto = new SongResponseDTO(value.getId(),
                    value.getSongname(),
                    value.getSinger(),
                    value.getCreatedAt(),
                    new UserResponeDTO(foundUser.getFullName()),
                    value.getTotalLike(),
                    value.getView(),
                    value.getRating());
            dtos.add(dto);
        }
        return dtos;
    }

    @Nullable
    private List<SongResponseDTO> getSongResponseDTOS(List<Song> songs) {
        if (!songs.isEmpty()) {
            List<SongResponseDTO> songResponseDTOS = new ArrayList<>();
            for (Song value : songs) {
                SongResponseDTO dto = new SongResponseDTO(value.getId(),
                        value.getSongname(),
                        value.getSinger(),
                        value.getCreatedAt(),
                        getUser(value.getUserUploadSong()),
                        value.getTotalLike(),
                        value.getView(),
                        value.getRating());
                songResponseDTOS.add(dto);
            }
            return songResponseDTOS;
        }
        return null;
    }

    // upload
    public ResponseEntity<String> uploadSong(SongDTO songDTO) {
        Optional<User> foundUser = this.userRepository.findById(songDTO.getUserid());
        if (foundUser.isPresent()) {
            Song song = new Song(songDTO.getSongName(),
                    songDTO.getSinger(),
                    songDTO.getTone(),
                    songDTO.getDescription(),
                    songDTO.getVocalRange(),
                    songDTO.getSongUrl(),
                    foundUser.get(),
                    genreSet(songDTO),
                    chordBasicSet(songDTO),
                    0, 0, 0, 0, 0, 0, 1);
            this.songRepository.save(song);
            return new ResponseEntity<>("Upload Successfully", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("User not found", HttpStatus.NOT_FOUND);
        }
    }

    // update
    public ResponseEntity<String> updateSong(SongDTO songDTO, Long userid, Long songid) {
        Optional<User> foundUser = this.userRepository.findUserByIdAndStatus(userid, 1);
        if (foundUser.isPresent()) {
            Optional<Song> foundSong = this.songRepository.findUserSongByUser(songid, foundUser.get().getId());
            if (foundSong.isPresent()) {
                Song song = foundSong.get();
                song.setSongname(songDTO.getSongName());
                song.setSinger(songDTO.getSinger());
                song.setTone(songDTO.getTone());
                song.setVocalRange(songDTO.getVocalRange());
                song.setSongUrl(songDTO.getSongUrl());
                song.setGenresofsong(genreSet(songDTO));
                this.songRepository.save(song);
                return new ResponseEntity<>("Update Successfully", HttpStatus.OK);
            }
            return new ResponseEntity<>("Update Failed", HttpStatus.NOT_IMPLEMENTED);
        }
        return new ResponseEntity<>("User not found", HttpStatus.NOT_FOUND);
    }

    // delete
    public ResponseEntity<String> deleteSong(Long songid, Long userid) {
        Optional<User> foundUser = this.userRepository.findById(userid);
        if (foundUser.isPresent()) {
            Optional<Song> foundSong = this.songRepository.findUserSongByUserUploadSongAndSongId(songid, foundUser.get().getId());
            if (foundSong.isPresent()) {
                Song song = foundSong.get();
                song.setStatus(0);
                this.songRepository.save(song);
                return new ResponseEntity<>("Delete Successfully", HttpStatus.OK);
            } else {
                return new ResponseEntity<>("This Song isn't owned by you", HttpStatus.NOT_FOUND);
            }
        }
        return new ResponseEntity<>("Delete Failed", HttpStatus.NOT_IMPLEMENTED);
    }

    // view all user song
    public List<SongResponseDTO> findAllUserSong(Long id) {
        Optional<User> foundUser = this.userRepository.findUserByIdAndStatus(id, 1);
        if (foundUser.isPresent()) {
            User user = foundUser.get();
            List<Song> songs = this.songRepository.findUserSongByUserUploadSong(foundUser.get().getId());
            return getSongResponseDTOS(user, songs);
        }
        return null;
    }

    // view user song by song name
    public List<SongResponseDTO> findUserSongbySongName(String name, Long id) {
        Optional<User> foundUser = this.userRepository.findUserByIdAndStatus(id, 1);
        if (foundUser.isPresent()) {
            User user = foundUser.get();
            List<Song> songs = this.songRepository.findUserSongByName(name, foundUser.get().getId());
            return getSongResponseDTOS(user, songs);
        } else {
            return null;
        }
    }

    // view user song by genre
    public List<SongResponseDTO> findUserSongByGenre(String genrename, Long id) {
        Set<SongResponseDTO> songResponseDTOS = new HashSet<>();
        List<Song> songs = this.songRepository.findUserSongByGenreName(genrename, id);
        for (Song song : songs) {
            SongResponseDTO dto = new SongResponseDTO(song.getId(),
                    song.getSongname(),
                    song.getSinger(),
                    song.getCreatedAt(),
                    getUser(song.getUserUploadSong()),
                    song.getTotalLike(),
                    song.getView(),
                    song.getRating());
            songResponseDTOS.add(dto);
        }
        List<SongResponseDTO> sortList = new ArrayList<>(songResponseDTOS);
        sortList.sort(Comparator.comparing(SongResponseDTO::getId));
        return sortList.isEmpty() ? sortList : null;
    }

    // view detail song
    public SongResponseDTO getDetailSong(Long id) {
        Optional<Song> foundSong = this.songRepository.findSongByIdAndStatus(id, 1);
        if (foundSong.isPresent()) {
            Song s = foundSong.get();
            s.setView(s.getView() + 1);
            SongResponseDTO dto = new SongResponseDTO();
            dto.setId(s.getId());
            dto.setSongName(s.getSongname());
            dto.setAuthor(s.getSinger());
            dto.setTone(s.getTone());
            dto.setDescription(s.getDescription());
            dto.setVocalRange(s.getVocalRange());
            dto.setSongUrl(s.getSongUrl());
            dto.setUser(getUser(s.getUserUploadSong()));
            dto.setCreateAt(s.getCreatedAt());
            dto.setGenres(getGenres(s.getId()));
            dto.setChords(getChords(s.getId()));
            dto.setView(s.getView());
            dto.setTotalLike(s.getTotalLike());
            return dto;
        }
        return null;
    }

    // view all song
    public List<SongResponseDTO> listAllSong() {
        List<Song> songs = this.songRepository.findAllSong();
        return getSongResponseDTOS(songs);
    }

    // view song by genre
    public List<SongResponseDTO> findSongByGenre(String genreNames) {
        List<Song> songs = this.songRepository.findSongsByGenreName(genreNames);
        return getSongResponseDTOS(songs);
    }

    // view song by name
    public List<SongResponseDTO> findSongByName(String name) {
        List<Song> songs = this.songRepository.findSongsbyName(name);
        return getSongResponseDTOS(songs);
    }

    // view song by username
    public List<SongResponseDTO> findSongByUserName(String name) {
        List<Song> songs = this.songRepository.findSongByUserUploadSongName(name);
        return getSongResponseDTOS(songs);
    }

    // Like
    public ResponseEntity<String> likeSong(Long userid, Long songid) {
        Optional<User> foundUser = this.userRepository.findUserByIdAndStatus(userid, 1);
        if (foundUser.isPresent()) {
            User user = foundUser.get();
            Optional<Song> foundSong = Optional.ofNullable(this.songRepository.findSongsLikeByUser(userid, songid));
            if (foundSong.isPresent()) {
                Song s = foundSong.get();
                Set<Song> songSet = user.getLikedSongs();
                songSet.remove(s);
                s.setTotalLike(s.getTotalLike() - 1);
                this.userRepository.save(user);
                this.songRepository.save(s);
                return new ResponseEntity<>("Unlike Successfully", HttpStatus.OK);
            } else {
                Optional<Song> song = this.songRepository.findById(songid);
                if (song.isPresent()) {
                    Song s = song.get();
                    Set<Song> songSet = user.getLikedSongs();
                    songSet.add(s);
                    s.setTotalLike(s.getTotalLike() + 1);
                    this.userRepository.save(user);
                    this.songRepository.save(s);
                    return new ResponseEntity<>("Like Successfully", HttpStatus.OK);
                } else {
                    return new ResponseEntity<>("Song was deteled or Song does not exist", HttpStatus.NOT_FOUND);
                }
            }
        } else {
            return new ResponseEntity<>("Like Failed", HttpStatus.NOT_IMPLEMENTED);
        }

    }

    // rating
    public ResponseEntity<String> rateSong(Long userid, Long songid, int rating) {
        Optional<User> foundUser = this.userRepository.findUserByIdAndStatus(userid, 1);
        if (foundUser.isPresent()) {
            Optional<Song> foundSong = this.songRepository.findSongByIdAndStatus(songid, 1);
            if (foundSong.isPresent()) {
                Song song = foundSong.get();
                Optional<SongRating> foundRating = this.songRatingRepository.findSongRatingBySongRatingAndRateByUsers(song, foundUser.get());
                if (foundRating.isPresent()) {
                    this.songRatingRepository.delete(foundRating.get());
                    song.setTotalUserRating(song.getTotalUserRating() - 1);
                    List<SongRating> songRatings = this.songRatingRepository.findAllBySongRating(song);
                    if(!songRatings.isEmpty()) {
                        int total = 0;
                        for (SongRating value : songRatings) {
                            total += value.getRating();
                        }
                        double result = (double) total / song.getTotalUserRating();
                        double round = Math.round(result * 10.0) / 10.0;
                        song.setRating(round);
                        this.songRepository.save(song);
                    }
                }
                song.setTotalUserRating(song.getTotalUserRating() + 1);
                SongRating songRating = new SongRating(foundUser.get(), song, rating);
                double result = (song.getRating() * song.getTotalUserRating() + rating) / (song.getTotalUserRating() + 1);
                double round = Math.round(result * 10.0) / 10.0;
                song.setRating(round);
                this.songRatingRepository.save(songRating);
                this.songRepository.save(song);
                return new ResponseEntity<>("Rating Successfully", HttpStatus.OK);
            }
            return new ResponseEntity<>("Song does not exist or Song was deleted", HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>("User not found", HttpStatus.NOT_FOUND);
    }
}

