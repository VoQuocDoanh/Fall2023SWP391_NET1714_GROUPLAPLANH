package com.example.demo.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class OrderDTO {
    private Long Id;
    private Long userId;
    private double price;
    private List<Long> beatId;
    private String paymentId;
    private String payerID;

//    public OrderDTO(Long userId, double price, List<Long> beatId) {
//        this.userId = userId;
//        this.price = price;
//        this.beatId = beatId;
//    }

}
