package com.example.demo.dto;

import com.example.demo.entity.ChordBasic;
import com.example.demo.entity.Genre;
import com.example.demo.entity.User;
import jdk.jfr.Name;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class SongDTO {
    private String songName;
    private String author;
    private String username;
    private String description;
    private String tone;
    private String vocalRange;
    private String songUrl;
    private List<String> genres;
}
