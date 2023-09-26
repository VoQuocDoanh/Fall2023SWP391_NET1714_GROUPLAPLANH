package com.example.demo.repository;

import com.example.demo.entity.Beat;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface BeatRepository extends JpaRepository<Beat, Long> {

    Optional<Beat> findNameByBeatName(String beatName);

    @Query("SELECT b FROM Beat b WHERE b.beatName like %:name% and status=1")
    List<Beat> findByBeatName(String name);
}
