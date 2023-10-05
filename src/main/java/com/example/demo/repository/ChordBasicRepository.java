package com.example.demo.repository;

import com.example.demo.entity.ChordBasic;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ChordBasicRepository extends JpaRepository<ChordBasic,Long> {
   @Query("SELECT c FROM ChordBasic c where c.chordKey=:chordKey and c.suffix=:chordSuffix and c.type=:chordType")
    List<ChordBasic> findChord(String chordKey, String chordSuffix,String chordType);

   ChordBasic findByChordId(Long id);

    @Query("SELECT c.chordName FROM ChordBasic c JOIN c.collections cl WHERE cl.id=:id")
    List<String> findByCollection(Long id);



    @Query("SELECT c.image FROM ChordBasic c JOIN c.collections cl WHERE cl.id=:id")
    List<String> findImageByCollection(Long id);
}
