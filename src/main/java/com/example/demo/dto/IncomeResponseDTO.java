package com.example.demo.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class IncomeResponseDTO {
    Double price;
    int numberBeatReject;
    int numberBeatAccept;
    String beatName;
    UserResponeDTO userName;

    public IncomeResponseDTO(Double price, int numberBeatReject, int numberBeatAccept) {
        this.price = price;
        this.numberBeatReject = numberBeatReject;
        this.numberBeatAccept = numberBeatAccept;
    }

    public IncomeResponseDTO(Double price, String beatName, UserResponeDTO userName) {
        this.price = price;
        this.beatName = beatName;
        this.userName = userName;
    }
}
