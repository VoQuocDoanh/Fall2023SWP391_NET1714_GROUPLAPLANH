package com.example.demo.dto;

import com.example.demo.entity.User;
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
}
