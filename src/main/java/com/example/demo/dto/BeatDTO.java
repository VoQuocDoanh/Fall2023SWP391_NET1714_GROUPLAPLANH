package com.example.demo.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class BeatDTO {
    private String beatName;
    private byte[] beatDemoSound;
    private byte[] beatFullSound;
    private String username;
    private String description;
    private Double price;
    private String fullName;
    private Long userId;
    private Long beatId;
    private List<String> genres;
    private int rating;
    private String vocalRange;

    @Override
    public String toString() {
        return "BeatDTO{" +
                "beatName='" + beatName + '\'' +
                ", beatSound='" + beatDemoSound + '\'' +
                ", username='" + username + '\'' +
                ", price=" + price +
                ", fullName='" + fullName + '\'' +
                '}';
    }
}