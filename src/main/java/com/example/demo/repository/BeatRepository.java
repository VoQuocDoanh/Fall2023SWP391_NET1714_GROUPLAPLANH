package com.example.demo.repository;

import com.example.demo.entity.Beat;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface BeatRepository extends JpaRepository<Beat, Long> {
    List<Beat> findByBeatName(String name);

    Optional<Beat> findNameByBeatName(String beatName);
}
