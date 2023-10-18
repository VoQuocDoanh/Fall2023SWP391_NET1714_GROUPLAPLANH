package com.example.demo.service;

import com.example.demo.dto.PlaylistDTO;
import com.example.demo.dto.SongDTO;
import com.example.demo.entity.Genre;
import com.example.demo.entity.Song;
import com.example.demo.entity.SongPlaylist;
import com.example.demo.entity.User;
import com.example.demo.repository.SongPlaylistRepository;
import com.example.demo.repository.SongRepository;
import com.example.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Optional;
import java.util.Set;

@Service
public class SongPlaylistService {

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private SongRepository songRepository;
    @Autowired
    private SongPlaylistRepository songPlaylistRepository;

    private Set<Song> songSet(PlaylistDTO playlistDTO) {
        Set<Song> songs = new HashSet<>();
        for (Long songid : playlistDTO.getSongids()) {
            Song song = this.songRepository.findSongbyId(songid);
            if (song != null) {
                songs.add(song);
            }
        }
        return songs;
    }

    public ResponseEntity<String> createPlaylist (PlaylistDTO playlistDTO){
        Optional<User> foundUser = this.userRepository.findById(playlistDTO.getUserid());
        if(foundUser.isPresent()){
            Optional<SongPlaylist> foundPlaylist = this.songPlaylistRepository.findUserSongPlaylistByName(playlistDTO.getName(), foundUser.get().getId());
            if(foundPlaylist.isPresent()){
                return new ResponseEntity<>("Playlist is already created", HttpStatus.NOT_FOUND);
            } else {
                SongPlaylist playlist = new SongPlaylist(playlistDTO.getName(),
                        foundUser.get(),
                        null,
                        1);
                this.songPlaylistRepository.save(playlist);
                return new ResponseEntity<>("Playlist is created successfully", HttpStatus.OK);
            }
        }
        return new ResponseEntity<>("Create Failed", HttpStatus.NOT_IMPLEMENTED);
    }

    public ResponseEntity<String> updatePlaylist (PlaylistDTO playlistDTO){
        Optional<User> foundUser = this.userRepository.findById(playlistDTO.getUserid());
        if(foundUser.isPresent()){
            Optional<SongPlaylist> foundPlaylist = this.songPlaylistRepository.findUserSongPlaylistByName(playlistDTO.getName(), foundUser.get().getId());
            if(foundPlaylist.isPresent()){
                SongPlaylist playlist = foundPlaylist.get();
                playlist.setName(playlistDTO.getName());
                playlist.setSongsinplaylist(songSet(playlistDTO));
                this.songPlaylistRepository.save(playlist);
                return new ResponseEntity<>("Update Successfully", HttpStatus.OK);
            } else {
                return new ResponseEntity<>("Playlist does not exist", HttpStatus.NOT_IMPLEMENTED);
            }
        }
        return new ResponseEntity<>("User not found", HttpStatus.NOT_FOUND);
    }

    public ResponseEntity<String> deletePlaylist (String name, Long userid){
        Optional<User> foundUser = this.userRepository.findById(userid);
        if(foundUser.isPresent()){
            Optional<SongPlaylist> foundPlaylist = this.songPlaylistRepository.findUserSongPlaylistByName(name, userid);
            if(foundPlaylist.isPresent()){
                SongPlaylist playlist = foundPlaylist.get();
                playlist.setStatus(0);
                this.songPlaylistRepository.save(playlist);
            } else {
                return new ResponseEntity<>("Playlist does not exist or Playlist was already deleted", HttpStatus.NOT_IMPLEMENTED);
            }
        }
        return new ResponseEntity<>("User not found", HttpStatus.NOT_FOUND);
    }
}
