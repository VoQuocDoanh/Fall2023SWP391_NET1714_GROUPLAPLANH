//
// Source code recreated from a .class file by IntelliJ IDEA
// (powered by FernFlower decompiler)
//

package com.example.demo.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "Song")
public class Song {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;

    @Column(name = "SongName")
    private String songname;

    @Column(name = "Date")
    private LocalDateTime createdAt;

    @Column(name = "Author")
    private String author;

    @Column(name = "Tone")
    private String tone;

    @Column(name = "Description")
    private String description;

    @Column(name = "VocalRange")
    private String vocalRange;

    @Column(name = "SongUrl")
    private String songUrl;

    @Column(name = "Status")
    private int status;

    @ManyToOne
    @JsonIgnore
    @JoinColumn(name = "userUploadSong")
    private User userUploadSong;

    @OneToMany(mappedBy = "feedbackSong")
    @JsonIgnore
    @JsonInclude(Include.NON_NULL)
    private List<FeedbackSong> feedbackSongs = new ArrayList();

    @ManyToMany
    @JsonIgnore
    @JoinTable(
            name = "GenreSong",
            joinColumns = {@JoinColumn(
                    name = "songId")},
            inverseJoinColumns = {@JoinColumn(
                    name = "genreId")}
    )
    private List<Genre> genres = new ArrayList();

    @ManyToMany(mappedBy = "songs")
    private List<ChordBasic> chords = new ArrayList();

    @PrePersist
    public void prePersist() {
        this.createdAt = LocalDateTime.now();
    }

    @JsonIgnore
    public void setUserUploadSong(final User userUploadSong) {
        this.userUploadSong = userUploadSong;
    }

    @JsonIgnore
    public void setFeedbackSongs(final List<FeedbackSong> feedbackSongs) {
        this.feedbackSongs = feedbackSongs;
    }

    @JsonIgnore
    public void setGenres(final List<Genre> genres) {
        this.genres = genres;
    }

    public Song(String songname, String author, String tone, String description, String vocalRange, String songUrl, User userUploadSong, int status) {
        this.songname = songname;
        this.author = author;
        this.tone = tone;
        this.description = description;
        this.vocalRange = vocalRange;
        this.songUrl = songUrl;
        this.userUploadSong = userUploadSong;
        this.status = status;
    }
}
