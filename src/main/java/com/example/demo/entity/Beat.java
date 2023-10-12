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

import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.Set;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "Beat")
public class Beat {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;

    @Column
    private String beatName;

    @Column
    private Double price;

    @Column
    private int status;

    @Column
    private String beatSound;


    @Column
    private String Description;

    @Column
    private int totalLike ;

    @Column
    private int view;

    @ManyToOne
    @JsonIgnore
    @JoinColumn(name = "userName")
    private User userName;

    @ManyToOne
    @JsonIgnore
    @JoinColumn(name = "orderBeat")
    private Order orderBeat;


    @ManyToMany
    @JsonIgnore
    @JoinTable(name = "GenreBeat",
            joinColumns = {@JoinColumn(
                    name = "beatId")},
            inverseJoinColumns = {@JoinColumn(
                    name = "genreId")}
    )
    private Set<Genre> genresofbeat = new HashSet<>();

    @Column(name = "created_at")
    private LocalDateTime createdAt;

    @PrePersist
    public void prePersist() {
        this.createdAt = LocalDateTime.now();
    }

    public Beat(String beatName, String beatSound, Double price, int status, User userName, int totalLike, int view) {
        this.beatName = beatName;
        this.price = price;
        this.status = status;
        this.beatSound = beatSound;
        this.userName = userName;
        this.totalLike = totalLike;
        this.view = view;
    }

    public Beat(Long id, String beatName, String beatSound, Double price, int status, Order orderBeat, LocalDateTime createdAt,int totalLike, int view) {
        this.Id=id;
        this.beatName = beatName;
        this.price = price;
        this.status=status;
        this.beatSound = beatSound;
        this.orderBeat = orderBeat;
        this.createdAt = createdAt;
        this.totalLike = totalLike;
        this.view = view;
    }

    public String toString() {
        return "Beat{Id=" + this.Id + ", beatName='" + this.beatName + "', price=" + this.price + ", status=" + this.status + ", beatSound='" + this.beatSound + "', userName=" + this.userName + "}";
    }
}
