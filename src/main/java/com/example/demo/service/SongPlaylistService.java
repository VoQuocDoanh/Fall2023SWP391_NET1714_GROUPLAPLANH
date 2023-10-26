package com.example.demo.service;

import com.example.demo.dto.*;
import com.example.demo.entity.Song;
import com.example.demo.entity.SongPlaylist;
import com.example.demo.entity.User;
import com.example.demo.repository.SongPlaylistRepository;
import com.example.demo.repository.SongRepository;
import com.example.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class SongPlaylistService {

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private SongRepository songRepository;
    @Autowired
    private SongPlaylistRepository songPlaylistRepository;

    private UserResponeDTO getUser(User user){
        return new UserResponeDTO(user.getId(), user.getFullName());
    }

    private Set<Song> songSet(PlaylistDTO playlistDTO) {
        Set<Song> songs = new HashSet<>();
        for (Long songid : playlistDTO.getSongids()) {
            Optional<Song> foundSong = this.songRepository.findSongByIdAndStatus(songid, 1);
            foundSong.ifPresent(songs::add);
        }
        return songs;
    }

    private List<SongResponseDTO> getSongs (SongPlaylist playlist){
        List<SongResponseDTO> dtos = new ArrayList<>();
        for (Song value : playlist.getSongsinplaylist()){
            SongResponseDTO dto = new SongResponseDTO(value.getId(),
                    value.getSongname(),
                    value.getAuthor(),
                    value.getCreatedAt(),
                    getUser(value.getUserUploadSong()),
                    value.getTotalLike(),
                    value.getView(),
                    value.getRating());
            dtos.add(dto);
        }
        return dtos;
    }
    // create
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

    // update
    public ResponseEntity<String> updatePlaylist (Long id, PlaylistDTO playlistDTO){
        Optional<User> foundUser = this.userRepository.findById(id);
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

    // delete
    public ResponseEntity<String> deletePlaylist (String name, Long userid){
        Optional<User> foundUser = this.userRepository.findUserByIdAndStatus(userid, 1);
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

    // view
    public List<PlaylistResponseDTO> viewall (Long userid, String name){
        Optional<User> foundUser = this.userRepository.findUserByIdAndStatus(userid, 1);
        if(foundUser.isPresent()){
            List<SongPlaylist> foundPlaylists = this.songPlaylistRepository.findSongPlaylistsByUserAndNameAndStatus(foundUser.get(), name, 1);
            if(!foundPlaylists.isEmpty()){
                List<PlaylistResponseDTO> dtos = new ArrayList<>();
                for (SongPlaylist value : foundPlaylists) {
                    PlaylistResponseDTO dto = new PlaylistResponseDTO(value.getId(),
                            value.getName(),
                            getUser(value.getUser()),
                            value.getCreatedAt(),
                            getSongs(value));
                    dtos.add(dto);
                }
                return dtos;
            }
            return null;
        }
        return null;
    }
}
