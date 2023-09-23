package com.example.demo.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonInclude;
import jakarta.persistence.*;
import lombok.Data;

import java.util.ArrayList;
import java.util.List;

@Data

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

//    @OneToMany(mappedBy="userName")
////    @JsonIgnore
//    @JsonInclude(JsonInclude.Include.NON_NULL)
//    private List<Beat> beats =new ArrayList<>();

    public User(String username, String pass, String fullName, String mail, String roleID, int status) {
        this.username = username;
        this.pass = pass;
        this.fullName = fullName;
        this.mail = mail;
        this.roleID = roleID;
        this.status=status;
    }

    public Long getId() {
        return Id;
    }

    public void setId(Long id) {
        Id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPass() {
        return pass;
    }

    public void setPass(String pass) {
        this.pass = pass;
    }

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public String getMail() {
        return mail;
    }

    public void setMail(String mail) {
        this.mail = mail;
    }

    public String getRoleID() {
        return roleID;
    }

    public void setRoleID(String roleID) {
        this.roleID = roleID;
    }

    public int getStatus() {
        return status;
    }

    public void setStatus(int status) {
        this.status = status;
    }

    public User() {
    }
}
