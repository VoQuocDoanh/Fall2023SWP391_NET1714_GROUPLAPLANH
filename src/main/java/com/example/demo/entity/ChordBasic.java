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

    @ManyToMany (cascade = {CascadeType.ALL})
    @JsonIgnore
    @JoinTable(name = "ChordOfSong",
            joinColumns = {@JoinColumn(
                    name = "chordId")},
            inverseJoinColumns = {@JoinColumn(
                    name = "songId")}
    )
    private List<Song> songs = new ArrayList();

//    @ManyToMany(cascade = {CascadeType.ALL})
//    @JsonIgnore
//    @JoinTable(
//            name = "ChordInCollection",
//            joinColumns = {@JoinColumn(
//                    name = "chordId")},
//            inverseJoinColumns = {@JoinColumn(
//                    name = "collectonId")}
//    )
    @ManyToMany(mappedBy = "chords",cascade = {CascadeType.ALL})
    private Set<ChordCollection> collections = new HashSet<>();


    @JsonIgnore
    public void setSongs(final List<Song> songs) {
        this.songs = songs;
    }

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
