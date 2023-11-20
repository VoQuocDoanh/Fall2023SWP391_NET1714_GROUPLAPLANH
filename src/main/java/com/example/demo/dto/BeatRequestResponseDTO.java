package com.example.demo.dto;

import lombok.Data;

import java.time.LocalDateTime;

@Data
public class BeatRequestResponseDTO {
    Long id;
    UserResponeDTO userRequest;
    UserResponeDTO musician;
    String beatName;
    private LocalDateTime creatAt;

    public BeatRequestResponseDTO(Long id, UserResponeDTO userRequest, String beatName, UserResponeDTO musician, LocalDateTime creatAt) {
        this.id = id;
        this.userRequest = userRequest;
        this.beatName = beatName;
        this.musician = musician;
        this.creatAt = creatAt;
    }
        private String description;
        private Long msId;
        private Double price;
}
