package com.example.demo.Entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Set;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "User")
public class UserEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;

    @Column
    private String username;

    @Column
    private String pass;

    @Column
    private String fullName;

    @Column
    private String mail;

    @OneToMany(mappedBy="add")
    private Set<Beat> beats;

    public Set<Beat> getBeats () {
        return beats ;
    }

    @OneToMany(mappedBy ="user_role")
    private  Set<UserRole> user_roles;

    public  Set<UserRole> getUser_roles(){
        return user_roles;
    }
}
