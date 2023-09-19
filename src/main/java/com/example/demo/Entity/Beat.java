package com.example.demo.Entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;

import java.sql.Timestamp;
import java.util.Date;
import java.util.Set;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "Beat")
public class Beat {
    @jakarta.persistence.Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;

    @Column
    private String beatName;

    @Column
    private String orderID;

 /*   @CreatedDate
    @Column(name = "created_date")
    private Date createdTime;

    @LastModifiedDate
    @Column(name = "last_modified_date")
    private Date lastModifiedTime;*/

    @Column
    private Double price;

    @Column
    private int status;

    @Column
    private String beatSound;


    @ManyToOne
    @JoinColumn(name="userId")
    private UserEntity user_id;


    @OneToMany(mappedBy ="PromotionAsc")
    private Set<PromotionBeatAssociation> promotionAsc;

    public  Set<PromotionBeatAssociation> getPromotionAsc(){
        return promotionAsc;
    }



    public Beat(String beatName, String beatSound,  Double price, int status /*,UserEntity user_id*/) {
        this.beatName = beatName;
        this.price = price;
        this.status = status;
        this.beatSound = beatSound;
        //  this.user_id = user_id;
    }

    public Long getId() {
        return Id;
    }

    public void setId(Long id) {
        Id = id;
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


    /*public Date getCreatedTime() {
        return createdTime;
    }

    public void setCreatedTime(Date createdTime) {
        this.createdTime = createdTime;
    }

    public Date getLastModifiedTime() {
        return lastModifiedTime;
    }

    public void setLastModifiedTime(Date lastModifiedTime) {
        this.lastModifiedTime = lastModifiedTime;
    }*/

    @CreatedDate
    @Column(name = "created_at")
    private Timestamp createdAt;

    public Timestamp getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(Timestamp createdAt) {
        this.createdAt = createdAt;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }


    public int getStatus() {
        return status;
    }

    public void setStatus(int status) {
        this.status = status;
    }

    public String getBeatSound() {
        return beatSound;
    }

    public void setBeatSound(String beatSound) {
        this.beatSound = beatSound;
    }

    public UserEntity getUser_id() {
        return user_id;
    }

    public void setUser_id(UserEntity user_id) {
        this.user_id = user_id;
    }

    public void setPromotionAsc(Set<PromotionBeatAssociation> promotionAsc) {
        this.promotionAsc = promotionAsc;
    }

    @Override
    public String toString() {
        return "Beat{" +
                "Id=" + Id +
                ", beatName='" + beatName + '\'' +
                ", orderID='" + orderID + '\'' +
                ", price=" + price +
                ", status=" + status +
                ", beatSound='" + beatSound + '\'' +
                ", user_id=" + user_id +
                ", promotionAsc=" + promotionAsc +
                ", createdAt=" + createdAt +
                '}';
    }
}
