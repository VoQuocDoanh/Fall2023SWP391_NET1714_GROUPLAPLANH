package com.example.demo.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;

import java.util.Date;
import java.util.Set;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Setter
@Getter
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
    @JsonIgnore
    private Set<PromotionBeatAssociation> promotion;

    public  Set<PromotionBeatAssociation> getPromotion(){
        return promotion;
    }
}
