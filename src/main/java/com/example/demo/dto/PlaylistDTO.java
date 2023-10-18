package com.example.demo.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class PlaylistDTO {
    private Long id;
    private String name;
    private int status;
    private Long userid;
    private List<Long> songids;
}
