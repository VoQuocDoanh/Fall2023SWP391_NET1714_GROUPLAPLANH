package com.example.demo.dto;

import com.example.demo.entity.User;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.Set;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class BeatResponseDTO {
    private String beatName;
    private String beatSound;
    private User username;
    private Double price;
    private String fullName;
    private LocalDateTime creatAt;
    private int view;
    private  int totalLike;
    private  boolean beatLike;
    private Set<User> userSet;


    @Override
    public String toString() {
        return "BeatDTO{" +
                "beatName='" + beatName + '\'' +
                ", beatSound='" + beatSound + '\'' +
                ", username='" + username + '\'' +
                ", price=" + price +
                ", fullName='" + fullName + '\'' +
                '}';
    }
}