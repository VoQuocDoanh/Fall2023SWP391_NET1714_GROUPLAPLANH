//
// Source code recreated from a .class file by IntelliJ IDEA
// (powered by FernFlower decompiler)
//

package com.example.demo.repository;

import com.example.demo.entity.Song;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SongRepository extends JpaRepository<Song, Long> {

    // User Song
    @Query("select s from Song s where s.songname like %:songName% and s.status = 1 and s.userUploadSong.Id = :id")
    List<Song> findUserSongByName(String songName, Long id);

    @Query("select s from Song s where s.userUploadSong.Id = :id and s.status = 1")
    List<Song> findUserSongByUserUploadSong(Long id);

    @Query("select s from Song s join s.genresofsong sg where sg.name = :genreName and s.status = 1 and s.userUploadSong.Id = :id order by s.Id asc")
    List<Song> findUserSongByGenreName(String genreName, Long id);

    // Song
    @Query("select s from Song s join s.genresofsong sg where sg.name = :genreName and s.status = 1 order by s.Id asc")
    List<Song> findSongsByGenreName(String genreName);

    @Query("select s from Song s where s.songname like %:songName% and s.status = 1")
    List<Song> findSongsbyName(String songName);

    @Query("select s from Song s where s.status = 1")
    List<Song> findAllSong();




}