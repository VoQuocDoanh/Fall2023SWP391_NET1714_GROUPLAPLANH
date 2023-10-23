package com.example.demo.repository;

import com.example.demo.entity.*;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface SongCommentRepository extends JpaRepository<SongComment, Long> {
    Optional<SongComment> findParentCommentById(Long id);

    List<SongComment> findSongCommentsBySongOfCommentAndParentCommentIsNull(Song song);

    List<SongComment> findByParentComment(SongComment comment);

    Optional<SongComment> findSongCommentByIdAndCommentByUsers(Long id, User user);

}
