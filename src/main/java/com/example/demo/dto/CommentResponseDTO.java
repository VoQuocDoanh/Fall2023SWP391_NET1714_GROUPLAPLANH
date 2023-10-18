package com.example.demo.dto;

import lombok.*;

import java.util.List;

@Data
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class CommentResponseDTO {
    private Long id;
    private Long parentId;
    private String content;
    private Long userId;
    private Long beatId;
    private int status;
    private List<CommentResponseDTO> subComment;
}
