package com.example.demo.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class ChordBasicResponseDTO {
    private Long Id;
    private String chordName;
    private String image;
    private String key;
    private String suffix;
    private String description;
    private String Type;

    @Override
    public String toString() {
        return "ChordBasicResponseDTO{" +
                "Id=" + Id +
                ", chordName='" + chordName + '\'' +
                ", image='" + image + '\'' +
                ", key='" + key + '\'' +
                ", suffix='" + suffix + '\'' +
                ", description='" + description + '\'' +
                ", Type='" + Type + '\'' +
                '}';
    }
}
