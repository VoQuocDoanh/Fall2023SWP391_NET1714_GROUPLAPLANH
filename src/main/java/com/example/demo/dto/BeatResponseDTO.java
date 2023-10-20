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
    private byte[] beatSound;
    private UserResponeDTO user;
    private Double price;
    private LocalDateTime creatAt;
    private int view;
    private int totalLike;
    private Set<User> userSet;
    private List<GenreResponseDTO> genres;
    private int cmt;
    private String vocalRange;

    public BeatResponseDTO(Long id, String beatName, byte[] beatSound, UserResponeDTO user, Double price, LocalDateTime creatAt, List<GenreResponseDTO> genres, int view, int totalLike, String vocalRange) {
        this.id = id;
        this.beatName = beatName;
        this.beatSound = beatSound;
        this.user = user;
        this.price = price;
        this.creatAt = creatAt;
        this.view = view;
        this.genres = genres;
        this.totalLike = totalLike;
        this.vocalRange = vocalRange;
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