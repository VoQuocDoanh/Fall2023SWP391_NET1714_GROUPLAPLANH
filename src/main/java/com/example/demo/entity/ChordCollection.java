//
// Source code recreated from a .class file by IntelliJ IDEA
// (powered by FernFlower decompiler)
//

package com.example.demo.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
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
@Table(name = "Song Collection")
public class ChordCollection {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "Name")
    private String name;

    @Column(name = "Description")
    private String description;

    @Column(name = "Status")
    private int status;

    @ManyToOne
    @JsonIgnore
    @JoinColumn(name = "userCollection")
    private User userCollection;

    @ManyToMany(mappedBy = "collections")
    private List<ChordBasic> chords = new ArrayList();

    @JsonIgnore
    public void setUserCollection(final User userCollection) {
        this.userCollection = userCollection;
    }

}
