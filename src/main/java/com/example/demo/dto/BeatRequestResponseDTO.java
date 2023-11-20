package com.example.demo.dto;

import lombok.Data;

@Data
public class BeatRequestResponseDTO {
    Long id;
    UserResponeDTO userRequest;
    UserResponeDTO musician;
    String beatName;

    public BeatRequestResponseDTO(Long id, UserResponeDTO userRequest, String beatName) {
        this.id = id;
        this.userRequest = userRequest;
        this.beatName = beatName;
    }
        private String description;
        private Long msId;
        private Double price;
}
