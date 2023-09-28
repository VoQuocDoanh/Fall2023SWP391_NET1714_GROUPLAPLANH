package com.example.demo.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ChordCollectionDTO {
    private String name;
    private int status;
    private String username;

    @Override
    public String toString() {
        return "ChordCollectionDTO{" +
                "name='" + name + '\'' +
                ", status=" + status +
                ", username='" + username + '\'' +
                '}';
    }
}
