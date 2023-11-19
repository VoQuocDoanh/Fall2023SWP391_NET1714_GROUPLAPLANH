package com.example.demo.repository;

import com.example.demo.entity.BeatRequest;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BeatRequestRepository extends JpaRepository<BeatRequest,Long> {
}
