//
// Source code recreated from a .class file by IntelliJ IDEA
// (powered by FernFlower decompiler)
//

package com.example.demo.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonInclude;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "ChordBasic")
public class ChordBasic {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long chordId;

    @Column(name = "ChordName")
    private String chordName;

    @Column(name = "Image")
    private String image;

    @Column(name = "ChordKey")
    private String chordKey;

    @Column(name = "Suffix")
    private String suffix;

    @Column(name = "Description")
    private String description;

    @Column(name = "Type")
    private String type;


    @ManyToMany(mappedBy = "chordsofsong", cascade = {CascadeType.ALL})
    private Set<Song> songs = new HashSet<>();

    @ManyToMany(mappedBy = "chordsofcollections",cascade = {CascadeType.ALL})
    private Set<ChordCollection> collections = new HashSet<>();

    @Override
    public String toString() {
        return "ChordBasic{" +
                "chordId=" + chordId +
                ", chordName='" + chordName + '\'' +
                ", image='" + image + '\'' +
                ", chordKey='" + chordKey + '\'' +
                ", suffix='" + suffix + '\'' +
                ", description='" + description + '\'' +
                ", type='" + type + '\'' +
                ", songs=" + songs +
                ", collections=" + collections +
                '}';
    }
}
