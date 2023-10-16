package com.example.demo.dto;

import com.example.demo.entity.User;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Set;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class BeatResponseDTO {
    private Long id;
    private String beatName;
    private String beatSound;
    private UserResponeDTO user;
    private Double price;
    private LocalDateTime creatAt;
    private int view;
    private int totalLike;
    private Set<User> userSet;
    private List<GenreResponseDTO> genres;

    public BeatResponseDTO(Long id, String beatName, String beatSound, UserResponeDTO user, Double price, LocalDateTime creatAt, int view, int totalLike) {
        this.id = id;
        this.beatName = beatName;
        this.beatSound = beatSound;
        this.user = user;
        this.price = price;
        this.creatAt = creatAt;
        this.view = view;
        this.totalLike = totalLike;
    }

    @Override
    public String toString() {
        return "BeatDTO{" +
                "beatName='" + beatName + '\'' +
                ", beatSound='" + beatSound + '\'' +
                ", username='" + user + '\'' +
                ", price=" + price +
                '}';
    }
}