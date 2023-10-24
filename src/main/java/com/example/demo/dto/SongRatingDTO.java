package com.example.demo.dto;

import lombok.*;

@Data
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class SongRatingDTO {
    private Long userId;
    private Long songId;
    private int rate;
}
