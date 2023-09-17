package com.example.demo.Entity;


import jakarta.persistence.*;


@Entity
@Table(name = "orders") // Use a different name for the table
public class OrderEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long orderId;

    private Double price;

    private Long userId;

    // getters and setters

    // other constructors and methods
}
