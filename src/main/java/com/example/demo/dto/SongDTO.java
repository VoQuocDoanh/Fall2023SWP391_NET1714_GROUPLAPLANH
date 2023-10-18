package com.example.demo.dto;

import lombok.*;

import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class SongDTO {
    private Long id;
    private String songName;
    private String author;
    private Long userid;
    private String description;
    private String tone;
    private String vocalRange;
    private String songUrl;
    private List<String> genres;
    private List<String> chords;
}
