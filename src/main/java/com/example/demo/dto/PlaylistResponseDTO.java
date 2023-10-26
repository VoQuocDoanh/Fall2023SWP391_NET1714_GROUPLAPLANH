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
}
