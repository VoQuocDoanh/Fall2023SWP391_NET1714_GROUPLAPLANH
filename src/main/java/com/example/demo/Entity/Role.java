package com.example.demo.Entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
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
