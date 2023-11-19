package com.example.demo.repository;

import com.example.demo.entity.MusicianRequest;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MusicianRequestRepository extends JpaRepository<MusicianRequest, Long> {
}
