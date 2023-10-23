package com.example.demo.dto;

import lombok.*;

import java.time.LocalDateTime;
import java.util.List;

@Data
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class CommentSongResponseDTO {
    private Long id;
    private Long parentId;
    private String content;
    private Long userId;
    private Long songId;
    private LocalDateTime localDateTime;
    private List<CommentSongResponseDTO> subComment;

    public CommentSongResponseDTO(Long id, Long parentId, String content, Long userId, Long songId, LocalDateTime localDateTime) {
        this.id = id;
        this.parentId = parentId;
        this.content = content;
        this.userId = userId;
        this.songId = songId;
        this.localDateTime = localDateTime;
    }
}
