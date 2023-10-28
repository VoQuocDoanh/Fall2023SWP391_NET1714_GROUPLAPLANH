//
// Source code recreated from a .class file by IntelliJ IDEA
// (powered by FernFlower decompiler)
//

package com.example.demo.dto;

import com.example.demo.validator.Password;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserDTO {
    private String username;

//    @NotBlank (message = "Password must be not null")
//    @Size(min = 5, message = "Password must be at least 5 characters")
//    @Password(message = "Invalid password")
//    private String password;

    @Pattern(regexp = "(^$|[0-9]{10})", message = "Phone Number must be 10 or 11 characters")
    private String phone;

    private String gender;
    private String fullName;
    private String address;
    private String role;

    // Musician
    private String professional;
    private String prize;
    private int year;

    // Content
    private String content;
    public String toString() {
        return "UserDTO{userName='" + this.username + "'}";
    }
}
