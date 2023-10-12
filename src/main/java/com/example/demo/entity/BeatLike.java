package com.example.demo.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@Getter
@Setter
@NoArgsConstructor
@Entity
@Table (name= "BeatLike")
public class BeatLike {
    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JsonIgnore
    @JoinColumn(name = "userAction")
    private User userAction;

    @ManyToOne
    @JsonIgnore
    @JoinColumn(name = "beatAction")
    private Beat beatAction;

    public BeatLike(User userAction, Beat beatAction) {
        this.userAction = userAction;
        this.beatAction = beatAction;
    }
}
