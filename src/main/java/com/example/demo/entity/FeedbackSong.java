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

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "FeedbackSong")
public class FeedbackSong {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;

    @Column(name = "Description")
    private String description;

    @Column(name = "Status")
    private int status;

    @Column(name = "Date")
    private LocalDateTime createdAt;

    @ManyToOne
    @JsonIgnore
    @JoinColumn(name = "userFeedback")
    private User userFeedback;

    @ManyToOne
    @JsonIgnore
    @JoinColumn(name = "feedbackSong")
    private Song feedbackSong;

    @PrePersist
    public void prePersist() {
        this.createdAt = LocalDateTime.now();
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
