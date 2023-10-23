package com.example.demo.dto;

import lombok.*;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CommentSongDTO {
    private Long id;
    private Long parentId;
    private String content;
    private Long userId;
    private Long songId;
    private int status;
    private List<CommentBeatResponseDTO> subComment;
}
