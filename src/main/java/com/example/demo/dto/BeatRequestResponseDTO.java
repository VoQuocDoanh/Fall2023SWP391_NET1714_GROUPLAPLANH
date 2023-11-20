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
    private int status;

    private String description;
    private Long msId;
    private Double price;
    private String beatDemo;
    private String beatFull;

    public BeatRequestResponseDTO(Long id, UserResponeDTO userRequest, String beatName, UserResponeDTO musician, LocalDateTime creatAt, int status) {
        this.id = id;
        this.userRequest = userRequest;
        this.beatName = beatName;
        this.musician = musician;
        this.creatAt = creatAt;
        this.status = status;


    }
    public BeatRequestResponseDTO(Long id, UserResponeDTO userRequest, String beatName, UserResponeDTO musician, LocalDateTime creatAt, int status, String beatDemo) {
        this.id = id;
        this.userRequest = userRequest;
        this.beatName = beatName;
        this.musician = musician;
        this.creatAt = creatAt;
        this.status = status;
        this.beatDemo = beatDemo;

    }
    public BeatRequestResponseDTO(Long id, UserResponeDTO userRequest, String beatFull, String beatName, UserResponeDTO musician, LocalDateTime creatAt, int status) {
        this.id = id;
        this.userRequest = userRequest;
        this.beatName = beatName;
        this.musician = musician;
        this.creatAt = creatAt;
        this.status = status;
        this.beatFull = beatFull;

    }

}
