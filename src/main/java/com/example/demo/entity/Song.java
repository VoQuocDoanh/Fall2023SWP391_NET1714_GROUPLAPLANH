//
// Source code recreated from a .class file by IntelliJ IDEA
// (powered by FernFlower decompiler)
//

package com.example.demo.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.PrePersist;
import jakarta.persistence.Table;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(
        name = "Song"
)
public class Song {
    @Id
    @GeneratedValue(
            strategy = GenerationType.IDENTITY
    )
    private Long Id;
    @Column(
            name = "SongName"
    )
    private String songName;
    @Column(
            name = "Date"
    )
    private LocalDateTime createdAt;
    @Column(
            name = "Author"
    )
    private String author;
    @Column(
            name = "Tone"
    )
    private String tone;
    @Column(
            name = "Description"
    )
    private String description;
    @Column(
            name = "VocalRange"
    )
    private String vocalRange;
    @Column(
            name = "SongUrl"
    )
    private String songUrl;
    @ManyToOne
    @JsonIgnore
    @JoinColumn(
            name = "userUploadSong"
    )
    private User userUploadSong;
    @OneToMany(
            mappedBy = "feedbackSong"
    )
    @JsonIgnore
    @JsonInclude(Include.NON_NULL)
    private List<FeedbackSong> feedbackSongs = new ArrayList();
    @ManyToMany
    @JsonIgnore
    @JoinTable(
            name = "GenreSong",
            joinColumns = {@JoinColumn(
                    name = "songId"
            )},
            inverseJoinColumns = {@JoinColumn(
                    name = "genreId"
            )}
    )
    private List<Genre> genres = new ArrayList();
    @ManyToMany(
            mappedBy = "songs"
    )
    private List<Chord> chords = new ArrayList();

    public Song() {
    }

    @PrePersist
    public void prePersist() {
        this.createdAt = LocalDateTime.now();
    }

    public Long getId() {
        return this.Id;
    }

    public String getSongName() {
        return this.songName;
    }

    public LocalDateTime getCreatedAt() {
        return this.createdAt;
    }

    public String getAuthor() {
        return this.author;
    }

    public String getTone() {
        return this.tone;
    }

    public String getDescription() {
        return this.description;
    }

    public String getVocalRange() {
        return this.vocalRange;
    }

    public String getSongUrl() {
        return this.songUrl;
    }

    public User getUserUploadSong() {
        return this.userUploadSong;
    }

    public List<FeedbackSong> getFeedbackSongs() {
        return this.feedbackSongs;
    }

    public List<Genre> getGenres() {
        return this.genres;
    }

    public List<Chord> getChords() {
        return this.chords;
    }

    public void setId(final Long Id) {
        this.Id = Id;
    }

    public void setSongName(final String songName) {
        this.songName = songName;
    }

    public void setCreatedAt(final LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }

    public void setAuthor(final String author) {
        this.author = author;
    }

    public void setTone(final String tone) {
        this.tone = tone;
    }

    public void setDescription(final String description) {
        this.description = description;
    }

    public void setVocalRange(final String vocalRange) {
        this.vocalRange = vocalRange;
    }

    public void setSongUrl(final String songUrl) {
        this.songUrl = songUrl;
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

    public void setChords(final List<Chord> chords) {
        this.chords = chords;
    }
}
