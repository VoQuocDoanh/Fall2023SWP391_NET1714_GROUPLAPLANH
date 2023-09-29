package com.example.demo.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class BeatDTO {
    private String beatName;
    private String beatSound;
    private String username;
    private Double price;
    private String orderID;

    private String fullName;

    @Override
    public String toString() {
        return "BeatDTO{" +
                "beatName='" + beatName + '\'' +
                ", beatSound='" + beatSound + '\'' +
                ", username='" + username + '\'' +
                ", price=" + price +
                ", orderID='" + orderID + '\'' +
                ", fullName='" + fullName + '\'' +
                '}';
    }
}