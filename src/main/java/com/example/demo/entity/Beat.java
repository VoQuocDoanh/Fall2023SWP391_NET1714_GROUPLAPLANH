//
// Source code recreated from a .class file by IntelliJ IDEA
// (powered by FernFlower decompiler)
//

package com.example.demo.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(
        name = "Beat"
)
public class Beat {
    @Id
    @GeneratedValue(
            strategy = GenerationType.IDENTITY
    )
    private Long Id;
    @Column
    private String beatName;
    @Column
    private Double price;
    @Column
    private int status;
    @Column
    private String beatSound;
    @ManyToOne
    @JsonIgnore
    @JoinColumn(
            name = "userName"
    )
    private User userName;
    @ManyToOne
    @JsonIgnore
    @JoinColumn(
            name = "orderBeat"
    )
    private com.example.demo.entity.Order orderBeat;
    @ManyToMany
    @JsonIgnore
    @JoinTable(
            name = "GenreBeat",
            joinColumns = {@JoinColumn(
                    name = "beatId"
            )},
            inverseJoinColumns = {@JoinColumn(
                    name = "genreId"
            )}
    )
    private List<Genre> genres = new ArrayList();
    @Column(
            name = "created_at"
    )
    private LocalDateTime createdAt;

    public Beat(String beatName, String beatSound, Double price, int status, User userName) {
        this.beatName = beatName;
        this.price = price;
        this.status = status;
        this.beatSound = beatSound;
        this.userName = userName;
    }


    public Beat(Long id, String beatName, String beatSound, Double price, com.example.demo.entity.Order orderBeat, LocalDateTime createdAt) {
        this.Id=id;
        this.beatName = beatName;
        this.price = price;
        this.status = status;
        this.beatSound = beatSound;
        this.userName = userName;
        this.orderBeat = orderBeat;
        this.createdAt = createdAt;
    }

    public Beat() {
    }

    public Long getId() {
        return this.Id;
    }

    public void setId(Long id) {
        this.Id = id;
    }

    public String getBeatName() {
        return this.beatName;
    }

    public void setBeatName(String beatName) {
        this.beatName = beatName;
    }

    @PrePersist
    public void prePersist() {
        this.createdAt = LocalDateTime.now();
    }

    public Double getPrice() {
        return this.price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public int getStatus() {
        return this.status;
    }

    public void setStatus(int status) {
        this.status = status;
    }

    public String getBeatSound() {
        return this.beatSound;
    }

    public void setBeatSound(String beatSound) {
        this.beatSound = beatSound;
    }

    public User getUserName() {
        return this.userName;
    }

    public void setUserName(User userName) {
        this.userName = userName;
    }

    public String toString() {
        return "Beat{Id=" + this.Id + ", beatName='" + this.beatName + "', price=" + this.price + ", status=" + this.status + ", beatSound='" + this.beatSound + "', userName=" + this.userName + "}";
    }

    public com.example.demo.entity.Order getOrderBeat() {
        return this.orderBeat;
    }

    public List<Genre> getGenres() {
        return this.genres;
    }

    public LocalDateTime getCreatedAt() {
        return this.createdAt;
    }

    @JsonIgnore
    public void setOrderBeat(final Order orderBeat) {
        this.orderBeat = orderBeat;
    }

    @JsonIgnore
    public void setGenres(final List<Genre> genres) {
        this.genres = genres;
    }

    public void setCreatedAt(final LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }


}
