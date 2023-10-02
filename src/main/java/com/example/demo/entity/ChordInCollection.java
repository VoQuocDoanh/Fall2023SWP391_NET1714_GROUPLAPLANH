package com.example.demo.entity;


import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonInclude;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name="ChordInCollection")
public class ChordInCollection {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;

    @ManyToOne
    @JsonIgnore
    @JoinColumn(name = "chordId")
    private ChordBasic chordId;

    @ManyToOne
    @JsonIgnore
    @JoinColumn(name = "collectionId")
    private ChordCollection collectionId;


}
