package com.example.demo.repository;

import com.example.demo.Entity.Beat;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BeatRepository extends JpaRepository<Beat, Long> {
    List<Beat> findByBeatName(String name);

}
