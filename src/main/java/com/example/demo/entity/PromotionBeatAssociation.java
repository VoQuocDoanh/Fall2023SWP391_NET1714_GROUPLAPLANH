package com.example.demo.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
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
    @JsonIgnore
    @JoinColumn(name="beatId", nullable=false)
    private Beat PromotionAsc;

    @ManyToOne
    @JsonIgnore
    @JoinColumn(name="promotionId", nullable=false)
    private Promotion promotion;
}
