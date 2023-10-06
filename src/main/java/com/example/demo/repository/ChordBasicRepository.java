package com.example.demo.repository;

import com.example.demo.entity.ChordBasic;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ChordBasicRepository extends JpaRepository<ChordBasic,Long> {
    @Query("SELECT c FROM ChordBasic c where c.chordKey=:chordKey and c.suffix=:chordSuffix and c.type=:chordType")
    List<ChordBasic> findChord(String chordKey, String chordSuffix,String chordType);

//   @Query("SELECT c FROM ChordBasic c where c.chordId = :id")
   ChordBasic findByChordId(Long id);

   ChordBasic findByChordKey(String name);

    @Query("SELECT cb.chordKey FROM ChordBasic cb JOIN cb.songs s WHERE s.Id = :id")
    List<String> findBySongs(Long id);


}
