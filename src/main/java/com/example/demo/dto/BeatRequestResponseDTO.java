package com.example.demo.dto;

import lombok.Data;

@Data
public class BeatRequestResponseDTO {
    private Long id;
        private String description;
        private String beatName;
    private Long userRequest;
        private Long msId;
        private Double price;
}
