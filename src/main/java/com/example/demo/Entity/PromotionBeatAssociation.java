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
@Table(name = "PromotionBeatAssociation")
public class PromotionBeatAssociation {

    @jakarta.persistence.Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;

    /*@Column
    private Long beatId;
*/
/*
    @Column
    private Long promotionId;
*/


    @ManyToOne
    @JoinColumn(name="beatId", nullable=false)
    private Beat PromotionAsc;

    @ManyToOne
    @JoinColumn(name="promotionId", nullable=false)
    private Promotion promotion;
}
