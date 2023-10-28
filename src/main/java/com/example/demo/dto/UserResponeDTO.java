package com.example.demo.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.Date;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class UserResponeDTO {

    private Long id;
    private String username;
    private String fullName;
    private String gender;
    private String role;
    private String phone;
    private String mail;
    private int status;
    private LocalDateTime crateAt;

    private String professional;
    private String prize;
    private int year;

    public UserResponeDTO(String fullName) {
        this.fullName = fullName;
    }

    public UserResponeDTO(Long id, String fullName, String phone, String mail) {
        this.id = id;
        this.fullName = fullName;
        this.phone = phone;
        this.mail = mail;
    }

    public UserResponeDTO(Long id, String fullName) {
        this.id = id;
        this.fullName = fullName;
    }

    public UserResponeDTO(Long id, String username, String fullName, String gender, String role, String mail,int status,LocalDateTime crateAt , String phoneNumber) {
        this.id = id;
        this.username = username;
        this.fullName = fullName;
        this.gender = gender;
        this.role = role;
        this.crateAt = crateAt;
        this.status = status;
        this.phone = phoneNumber;
        this.mail = mail;
    }

    public UserResponeDTO(Long id, String username, String fullName, String phoneNumber, String mail) {
        this.id = id;
        this.username = username;
        this.fullName = fullName;
        this.phone = phoneNumber;
        this.mail = mail;
    }
}
