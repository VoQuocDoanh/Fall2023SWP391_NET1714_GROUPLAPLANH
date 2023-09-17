package com.example.demo.Entity;

import jakarta.persistence.*;
import lombok.*;

import java.util.Date;
import java.util.Set;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Getter
@Setter
@Table(name = "Beat")
public class Beat {
    @jakarta.persistence.Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;

    @Column
    private String beatName;

    @Column
    private String orderID;

/*    @Column
    private Long userId;*/
    @Column
    private Date date;

    @Column
    private Double price;

    @Column
    private boolean status;

    @Column
    private String beatSound;

    @ManyToOne
    @JoinColumn(name="userId", nullable=false)
    private UserEntity add;

    @OneToMany(mappedBy ="PromotionAsc")
    private Set<PromotionBeatAssociation> promotionAsc;

    public  Set<PromotionBeatAssociation> getPromotionAsc(){
        return promotionAsc;
    }

}
