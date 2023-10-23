package com.example.demo.dto;

import lombok.*;

@Data
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class SongRatingDTO {
    private Long id;
    private Long userId;
    private Long songId;
    private int rate;

    public SongRatingDTO(Long userId, Long songId, int rate) {
        this.userId = userId;
        this.songId = songId;
        this.rate = rate;
    }
}
