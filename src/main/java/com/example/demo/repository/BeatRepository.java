//
// Source code recreated from a .class file by IntelliJ IDEA
// (powered by FernFlower decompiler)
//

package com.example.demo.repository;

import com.example.demo.entity.Beat;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface BeatRepository extends JpaRepository<Beat, Long> {
    @Query("SELECT b FROM Beat b WHERE b.beatName like %:name% and b.status=1")
    List<Beat> findByBeatName(String name);

    Optional<Beat> findNameByBeatName(String beatName);

    List<Beat> findByOrderByStatusDesc();

    @Query("SELECT b FROM Beat b WHERE b.status = 1")
    List<Beat> findAllBeat();

    Beat findBeatById(Long Id);
    @Query("SELECT b FROM Beat b WHERE b.userName=:username")
    Optional<Beat> findBeatByUserName(Long username);
}
