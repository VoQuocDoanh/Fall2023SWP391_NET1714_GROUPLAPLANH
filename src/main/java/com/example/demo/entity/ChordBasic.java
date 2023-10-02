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
import java.util.List;

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

    @ManyToMany (cascade = {CascadeType.ALL})
    @JsonIgnore
    @JoinTable(name = "ChordOfSong",
            joinColumns = {@JoinColumn(
                    name = "chordId")},
            inverseJoinColumns = {@JoinColumn(
                    name = "songId")}
    )
    private List<Song> songs = new ArrayList();

    @OneToMany(mappedBy = "chordId")
    @JsonIgnore
    @JsonInclude(JsonInclude.Include.NON_NULL)
    private List<ChordInCollection> chordList = new ArrayList();


    @JsonIgnore
    public void setSongs(final List<Song> songs) {
        this.songs = songs;
    }

   }
