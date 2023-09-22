package com.example.demo.repository;

import com.example.demo.entity.Beat;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface BeatRepository extends JpaRepository<Beat, Long> {
    List<Beat> findByBeatName(String name);

    Optional<Beat> findNameByBeatName(String beatName);
}
