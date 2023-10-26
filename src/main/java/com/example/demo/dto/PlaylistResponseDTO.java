package com.example.demo.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class PlaylistResponseDTO {
    private Long id;
    private String name;
    private UserResponeDTO userid;
    private LocalDateTime createAt;
    private List<SongResponseDTO> songs;

    public PlaylistResponseDTO(Long id, String name, UserResponeDTO userid, LocalDateTime createAt) {
        this.id = id;
        this.name = name;
        this.userid = userid;
        this.createAt = createAt;
    }
}
