package com.example.demo.repository;

import com.example.demo.entity.Beat;
import com.example.demo.entity.BeatLike;
import com.example.demo.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BeatLikeRepository extends JpaRepository<BeatLike, Long> {
    BeatLike findByUserAction(User userAction);
    BeatLike findByBeatAction(Beat beatAction);
}
