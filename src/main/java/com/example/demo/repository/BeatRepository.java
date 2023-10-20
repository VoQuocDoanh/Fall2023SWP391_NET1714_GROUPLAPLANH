//
// Source code recreated from a .class file by IntelliJ IDEA
// (powered by FernFlower decompiler)
//

package com.example.demo.repository;

import com.example.demo.entity.Beat;
import com.example.demo.entity.Order;
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

    @Query("select b from Beat b where b.userName.Id = :id and b.status = 1 or b.status = 0 order by b.Id")
    List<Beat> findUserBeatByUsername(Long id);

    List<Beat> findByOrderByStatusDesc();

    Beat findBeatByOrderBeat(Order id);

    @Query("SELECT b.Id FROM Beat b join b.userSet u where u.Id =:id")
    List<Long> findUserLiked(Long id);

    @Query("SELECT b.Id FROM Beat b join b.userRating u where u.Id =:id")
    List<Long> findUserRating(Long id);


    @Query("SELECT b FROM Beat b WHERE b.status = 1")
    List<Beat> findAllBeat();

    @Query("SELECT b FROM Beat b join b.userName u where b.status = -1 and u.Id = :id")
    List<Beat> findBeatSoldOut(Long id);


    Beat findBeatById(Long Id);
    @Query("SELECT b FROM Beat b WHERE b.userName=:username")
    Optional<Beat> findBeatByUserName(Long username);

    @Query("select b from Beat b where b.userName.fullName like %:name% and b.status = 1 order by b.Id")
    List<Beat> findBeatByMusician (String name);
}
