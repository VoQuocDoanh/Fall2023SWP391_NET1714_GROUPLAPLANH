package com.example.demo.entity;

import jakarta.persistence.*;
import lombok.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Setter
@Getter
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
