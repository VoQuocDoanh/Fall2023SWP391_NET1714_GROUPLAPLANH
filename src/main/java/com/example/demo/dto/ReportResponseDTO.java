package com.example.demo.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ReportResponseDTO {

    private Long id;
    private Long userId;
    private String username;
    private String content;
    private LocalDateTime localDateTime;

}
