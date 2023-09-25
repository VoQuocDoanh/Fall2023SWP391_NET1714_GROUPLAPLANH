//
// Source code recreated from a .class file by IntelliJ IDEA
// (powered by FernFlower decompiler)
//

package com.example.demo.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.Table;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(
        name = "Chord"
)
public class Chord {
    @Id
    @GeneratedValue(
            strategy = GenerationType.IDENTITY
    )
    private Long chordId;
    @Column(
            name = "ChordName"
    )
    private String chordName;
    @Column(
            name = "Image"
    )
    private String image;
    @Column(
            name = "Key"
    )
    private String key;
    @Column(
            name = "Suffix"
    )
    private String suffix;
    @Column(
            name = "Description"
    )
    private String description;
    @Column(
            name = "Type"
    )
    private String type;
    @ManyToMany
    @JsonIgnore
    @JoinTable(
            name = "ChordOfSong",
            joinColumns = {@JoinColumn(
                    name = "chordId"
            )},
            inverseJoinColumns = {@JoinColumn(
                    name = "songId"
            )}
    )
    private List<Song> songs = new ArrayList();
    @ManyToMany
    @JsonIgnore
    @JoinTable(
            name = "ChordInCollection",
            joinColumns = {@JoinColumn(
                    name = "chordId"
            )},
            inverseJoinColumns = {@JoinColumn(
                    name = "collectonId"
            )}
    )
    private List<ChordCollection> collections = new ArrayList();

    public Long getChordId() {
        return this.chordId;
    }

    public String getChordName() {
        return this.chordName;
    }

    public String getImage() {
        return this.image;
    }

    public String getKey() {
        return this.key;
    }

    public String getSuffix() {
        return this.suffix;
    }

    public String getDescription() {
        return this.description;
    }

    public String getType() {
        return this.type;
    }

    public List<Song> getSongs() {
        return this.songs;
    }

    public List<ChordCollection> getCollections() {
        return this.collections;
    }

    public void setChordId(final Long chordId) {
        this.chordId = chordId;
    }

    public void setChordName(final String chordName) {
        this.chordName = chordName;
    }

    public void setImage(final String image) {
        this.image = image;
    }

    public void setKey(final String key) {
        this.key = key;
    }

    public void setSuffix(final String suffix) {
        this.suffix = suffix;
    }

    public void setDescription(final String description) {
        this.description = description;
    }

    public void setType(final String type) {
        this.type = type;
    }

    @JsonIgnore
    public void setSongs(final List<Song> songs) {
        this.songs = songs;
    }

    @JsonIgnore
    public void setCollections(final List<ChordCollection> collections) {
        this.collections = collections;
    }

    public Chord() {
    }

    public Chord(final Long chordId, final String chordName, final String image, final String key, final String suffix, final String description, final String type, final List<Song> songs, final List<ChordCollection> collections) {
        this.chordId = chordId;
        this.chordName = chordName;
        this.image = image;
        this.key = key;
        this.suffix = suffix;
        this.description = description;
        this.type = type;
        this.songs = songs;
        this.collections = collections;
    }
}
