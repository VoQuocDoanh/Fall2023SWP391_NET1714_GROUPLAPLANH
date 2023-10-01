package com.example.demo.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
@NoArgsConstructor
@AllArgsConstructor
@Data
@Builder
public class UserResponeDTO {
    private Long id;
    private String username;
    private String password;
    private String fullName;
    private String gender;
    private String mail;
    private String role;
    private int status;
    private String address;
    private String phoneNumber;
    private String createdAt;

}
