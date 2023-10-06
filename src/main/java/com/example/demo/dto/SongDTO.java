package com.example.demo.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class SongDTO {
    private Long id;
    private String songName;
    private String author;
    private String username;
    private Long userid;
    private String description;
    private String tone;
    private String vocalRange;
    private String songUrl;
    private String createAt;
    private List<String> genres;
    private List<String> chords;
}
