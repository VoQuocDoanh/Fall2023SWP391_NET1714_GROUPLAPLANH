package com.example.demo.repository;

import com.example.demo.entity.Genre;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Set;

@Repository
public interface GenreRepository extends JpaRepository<Genre, Long> {

    Genre findByName(String genreName);

    @Query("SELECT g.name FROM Genre g JOIN g.songs s WHERE s.Id = :id")
    List<String> findBySongs(Long id);
}
