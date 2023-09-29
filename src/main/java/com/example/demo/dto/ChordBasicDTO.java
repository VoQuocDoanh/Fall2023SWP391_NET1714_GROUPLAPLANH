package com.example.demo.dto;

public class ChordBasicDTO {
    private Long Id;
    private String chordName;
    private String image;
    private String key;
    private String suffix;
    private String description;
    private String Type;

    @Override
    public String toString() {
        return "ChordBasicDTO{" +
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
