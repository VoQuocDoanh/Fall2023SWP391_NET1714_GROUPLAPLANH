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
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(
        name = "Song Collection"
)
public class ChordCollection {
    @Id
    @GeneratedValue(
            strategy = GenerationType.IDENTITY
    )
    private Long id;
    @Column(
            name = "Name"
    )
    private String name;
    @Column(
            name = "Description"
    )
    private String description;
    @Column(
            name = "Status"
    )
    private int status;
    @ManyToOne
    @JsonIgnore
    @JoinColumn(
            name = "userCollection"
    )
    private User userCollection;
    @ManyToMany(
            mappedBy = "collections"
    )
    private List<Chord> chords = new ArrayList();

    public Long getId() {
        return this.id;
    }

    public String getName() {
        return this.name;
    }

    public String getDescription() {
        return this.description;
    }

    public int getStatus() {
        return this.status;
    }

    public User getUserCollection() {
        return this.userCollection;
    }

    public List<Chord> getChords() {
        return this.chords;
    }

    public void setId(final Long id) {
        this.id = id;
    }

    public void setName(final String name) {
        this.name = name;
    }

    public void setDescription(final String description) {
        this.description = description;
    }

    public void setStatus(final int status) {
        this.status = status;
    }

    @JsonIgnore
    public void setUserCollection(final User userCollection) {
        this.userCollection = userCollection;
    }

    public void setChords(final List<Chord> chords) {
        this.chords = chords;
    }

    public ChordCollection() {
    }

    public ChordCollection(final Long id, final String name, final String description, final int status, final User userCollection, final List<Chord> chords) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.status = status;
        this.userCollection = userCollection;
        this.chords = chords;
    }
}
