package com.example.demo.dto;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
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
}
