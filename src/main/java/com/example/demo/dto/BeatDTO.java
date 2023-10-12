package com.example.demo.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class BeatDTO {
    private String beatName;
    private String beatSound;
    private String username;
    private Double price;
    private String fullName;
    private Long userId;
    private Long beatId;

    @Override
    public String toString() {
        return "BeatDTO{" +
                "beatName='" + beatName + '\'' +
                ", beatSound='" + beatSound + '\'' +
                ", username='" + username + '\'' +
                ", price=" + price +
                ", fullName='" + fullName + '\'' +
                '}';
    }
}