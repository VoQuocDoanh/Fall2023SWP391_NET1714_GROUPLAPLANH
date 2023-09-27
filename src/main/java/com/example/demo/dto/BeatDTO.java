//
// Source code recreated from a .class file by IntelliJ IDEA
// (powered by FernFlower decompiler)
//

package com.example.demo.dto;

public class BeatDTO {
    private String beatName;
    private String beatSound;
    private String username;
    private Double price;
    private String orderID;

    public BeatDTO(String beatName, String beatSound, Double price, String username, String orderID) {
        this.beatName = beatName;
        this.price = price;
        this.beatSound = beatSound;
        this.username = username;
        this.orderID = orderID;
    }

    public BeatDTO() {
    }

    public String getBeatName() {
        return this.beatName;
    }

    public void setBeatName(String beatName) {
        this.beatName = beatName;
    }

    public String getOrderID() {
        return this.orderID;
    }

    public void setOrderID(String orderID) {
        this.orderID = orderID;
    }

    public Double getPrice() {
        return this.price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public String getBeatSound() {
        return this.beatSound;
    }

    public void setBeatSound(String beatSound) {
        this.beatSound = beatSound;
    }

    public String getUsername() {
        return this.username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    @Override
    public String toString() {
        return "BeatDTO{" +
                "beatName='" + beatName + '\'' +
                ", beatSound='" + beatSound + '\'' +
                ", username='" + username + '\'' +
                ", price=" + price +
                ", orderID='" + orderID + '\'' +
                '}';
    }
}
