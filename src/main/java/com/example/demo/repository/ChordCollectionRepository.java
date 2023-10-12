package com.example.demo.repository;

import com.example.demo.entity.ChordCollection;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ChordCollectionRepository extends JpaRepository<ChordCollection,Long> {
    Optional<ChordCollection> findByName(String name);

    /*@Query("SELECT c FROM ChordInCollection c WHERE c.collectonId=:collectionId")
    ChordCollection findCollectionId(Long id);*/

    @Query("SELECT c FROM ChordCollection  c WHERE c.id=:id")
    Optional<ChordCollection> findByCollectionId(Long id);
}
