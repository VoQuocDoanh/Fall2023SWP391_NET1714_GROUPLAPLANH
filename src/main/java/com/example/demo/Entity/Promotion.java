package com.example.demo.Entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
import java.util.Set;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "Promotion")
public class Promotion {

    @jakarta.persistence.Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;

    @Column
    private String name;

    @Column
    private String description;

    @Column
    private Date startDate;
    @Column
    private Date endDate;

    @Column
    private int discount;

    @OneToMany(mappedBy ="promotion")
    private Set<PromotionBeatAssociation> promotion;

    public  Set<PromotionBeatAssociation> getPromotion(){
        return promotion;
    }
}
