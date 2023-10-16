package com.example.demo.dto;

import com.example.demo.entity.ChordBasic;
import com.example.demo.entity.Genre;
import com.example.demo.entity.User;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;
@NoArgsConstructor
@AllArgsConstructor
@Data
@Builder
public class SongResponseDTO {
    private Long id;
    private String songName;
    private String author;
    private UserResponeDTO user;
    private String description;
    private String tone;
    private String vocalRange;
    private String songUrl;
    private String createAt;
    private List<GenreResponseDTO> genres;
    private List<ChordResponseDTO> chords;
    private int totalLike;
    private int view;

    public SongResponseDTO(Long id, String songName, String author, String createAt, UserResponeDTO user, int totalLike, int view) {
        this.id = id;
        this.songName = songName;
        this.author = author;
        this.createAt = createAt;
        this.user = user;
        this.view = view;
        this.totalLike = totalLike;
    }
}
