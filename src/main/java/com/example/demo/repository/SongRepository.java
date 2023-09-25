//
// Source code recreated from a .class file by IntelliJ IDEA
// (powered by FernFlower decompiler)
//

package com.example.demo.repository;

import com.example.demo.entity.Beat;
import com.example.demo.entity.Song;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface SongRepository extends JpaRepository<Song, Long> {
    @Query("SELECT b FROM Beat b WHERE b.beatName like %:name% and status=1")
    List<Beat> findByBeatName(String name);
}
