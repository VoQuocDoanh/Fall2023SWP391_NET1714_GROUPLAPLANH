package com.example.demo.dto;

import lombok.Data;

import java.util.List;

@Data
public class OrderResponseDTO {
    private Long Id;
    private UserResponeDTO userId;
    private double price;
    private List<BeatResponseDTO> beatId;

    public OrderResponseDTO(Long id, UserResponeDTO userId, double price) {
        Id = id;
        this.userId = userId;
        this.price = price;
    }
}
