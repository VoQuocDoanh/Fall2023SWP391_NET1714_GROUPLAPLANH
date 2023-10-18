package com.example.demo.entity;

import jakarta.persistence.*;

@Entity
@Table (name = "MusicianInformation")
public class MusicianInformation {
    @Id
    @GeneratedValue (strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "professional")
    private String professional;

    @Column(name = "prize")
    private String prize;

    @Column (name = "YearOfOperation")
    private int year;

    @OneToOne(mappedBy = "msInformation")
    private User user;
}
