//
// Source code recreated from a .class file by IntelliJ IDEA
// (powered by FernFlower decompiler)
//

package com.example.demo.dto;

import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserDTO {
    private String username;
    private String password;
    private String phone;
    private String mail;
    private String gender;
    private String fullName;
    private String address;
    private String role;

    // Musician
    private String professional;
    private String prize;
    private int year;


    public String toString() {
        return "UserDTO{userName='" + this.username + "'}";
    }
}
