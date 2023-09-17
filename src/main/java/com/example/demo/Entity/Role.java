package com.example.demo.Entity;

import jakarta.persistence.*;
import lombok.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Setter
@Getter
@Table(name = "Role")
public class Role {
    @jakarta.persistence.Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;


/*
    @Column
    private String roleName;
*/

    @ManyToOne
    @JoinColumn(name="roleName", nullable=false)
    private UserRole role;
}
