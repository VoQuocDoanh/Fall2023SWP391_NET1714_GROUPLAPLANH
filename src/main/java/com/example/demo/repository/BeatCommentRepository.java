package com.example.demo.repository;

import com.example.demo.entity.BeatComment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BeatCommentRepository extends JpaRepository<BeatComment, Long> {

    BeatComment findParentCommentById(Long id);
  //  BeatComment findByUserCommentBeat(Long id);
}
