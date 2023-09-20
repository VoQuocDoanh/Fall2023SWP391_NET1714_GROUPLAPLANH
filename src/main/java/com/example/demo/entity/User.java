package com.example.demo.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "User")
public class User {

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

    @Column
    private String roleID;

    @Column
    private int status;

    @OneToMany(mappedBy="user_id")
    private List<Beat> beats =new ArrayList<>();

    public User(String username, String pass, String fullName, String mail, String roleID, int status) {
        this.username = username;
        this.pass = pass;
        this.fullName = fullName;
        this.mail = mail;
        this.roleID = roleID;
    }
}
