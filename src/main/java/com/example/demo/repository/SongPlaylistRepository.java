package com.example.demo.repository;

import com.example.demo.entity.SongPlaylist;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface SongPlaylistRepository extends JpaRepository<SongPlaylist, Long> {
    @Query("select p from SongPlaylist p where p.user.Id = :userid and p.name = :name and p.status = 1")
    Optional<SongPlaylist> findUserSongPlaylistByName (String name, Long userid);
}
