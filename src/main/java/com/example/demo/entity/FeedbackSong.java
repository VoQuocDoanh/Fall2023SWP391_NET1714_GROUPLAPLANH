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
import jakarta.persistence.ManyToOne;
import jakarta.persistence.PrePersist;
import jakarta.persistence.Table;
import java.time.LocalDateTime;

@Entity
@Table(
        name = "FeedbackSong"
)
public class FeedbackSong {
    @Id
    @GeneratedValue(
            strategy = GenerationType.IDENTITY
    )
    private Long Id;
    @Column(
            name = "Description"
    )
    private String description;
    @Column(
            name = "Status"
    )
    private int status;
    @Column(
            name = "Date"
    )
    private LocalDateTime createdAt;
    @ManyToOne
    @JsonIgnore
    @JoinColumn(
            name = "userFeedback"
    )
    private User userFeedback;
    @ManyToOne
    @JsonIgnore
    @JoinColumn(
            name = "feedbackSong"
    )
    private Song feedbackSong;

    public FeedbackSong() {
    }

    @PrePersist
    public void prePersist() {
        this.createdAt = LocalDateTime.now();
    }

    public Long getId() {
        return this.Id;
    }

    public String getDescription() {
        return this.description;
    }

    public int getStatus() {
        return this.status;
    }

    public LocalDateTime getCreatedAt() {
        return this.createdAt;
    }

    public User getUserFeedback() {
        return this.userFeedback;
    }

    public Song getFeedbackSong() {
        return this.feedbackSong;
    }

    public void setId(final Long Id) {
        this.Id = Id;
    }

    public void setDescription(final String description) {
        this.description = description;
    }

    public void setStatus(final int status) {
        this.status = status;
    }

    public void setCreatedAt(final LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }

    @JsonIgnore
    public void setUserFeedback(final User userFeedback) {
        this.userFeedback = userFeedback;
    }

    @JsonIgnore
    public void setFeedbackSong(final Song feedbackSong) {
        this.feedbackSong = feedbackSong;
    }
}
