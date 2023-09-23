package com.example.demo.dto;


//import lombok.Data;

public class BeatDTO {

    private String beatName;

    private String beatSound;

    private String username;

    private Double price;

    private String orderID;

    public BeatDTO( String beatName, String beatSound,  Double price, String username, String orderID) {
        this.beatName = beatName;
        this.price = price;
        this.beatSound = beatSound;
        this.username = username;
        this.orderID = orderID;
    }

    public BeatDTO() {
    }

    public String getBeatName() {
        return beatName;
    }

    public void setBeatName(String beatName) {
        this.beatName = beatName;
    }

    public String getOrderID() {
        return orderID;
    }

    public void setOrderID(String orderID) {
        this.orderID = orderID;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public String getBeatSound() {
        return beatSound;
    }

    public void setBeatSound(String beatSound) {
        this.beatSound = beatSound;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }
}
