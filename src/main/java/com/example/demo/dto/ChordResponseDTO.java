package com.example.demo.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Data
@Builder
public class ChordResponseDTO {
    private Long Id;
    private String chordName;
    private String image;
    private String key;
    private String suffix;
    private String description;
    private String Type;

    public ChordResponseDTO(Long id, String chordName, String image, String key, String suffix, String type, String description) {
        Id = id;
        this.chordName = chordName;
        this.image = image;
        this.key = key;
        this.suffix = suffix;
        Type = type;
        this.description = description;
    }

}
