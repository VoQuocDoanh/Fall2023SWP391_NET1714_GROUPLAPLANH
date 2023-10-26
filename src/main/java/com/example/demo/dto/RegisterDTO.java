package com.example.demo.dto;

import com.example.demo.validator.Password;
import jakarta.persistence.Transient;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Data
public class RegisterDTO {

    @NotBlank (message = "User Name must be not null")
    @Size (min = 3, message = "User Name must be at least 3 characters")
    private String userName;

    @NotBlank (message = "Password must be not null")
    @Size (min = 5, message = "Password must be at least 5 characters")
    @Password(message = "Invalid password")
    private String password;

    @NotBlank(message = "Email must not be blank")
    @Pattern(regexp = "^[A-Za-z0-9+_.-]+@(.+)$", message = "Please provide a valid email")
    private String email;

    @NotBlank(message = "Confirm password must not be blank")
    @Size(min = 5, message = "Confirm password must be at least 5 characters long")
    @Transient
    private String confirmPassword;

    private String role;

    private String gender;
}
