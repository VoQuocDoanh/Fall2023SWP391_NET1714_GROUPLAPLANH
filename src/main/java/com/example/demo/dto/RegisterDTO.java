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

    @NotBlank (message = "Phone Number must be not null")
    @Pattern (regexp = "(^$|[0-9]{10})", message = "Phone Number must be 10 or 11 characters")
    private String phone;

    @NotBlank (message = "Full Name must be not null")
    @Size (min = 1, message = "Full Name must be at least 1 characters")
    private String fullName;

    @NotBlank (message = "Address must be not null")
    @Size (min = 6, message = "Address must be at least 6 characters")
    private String address;

    @NotBlank(message = "Email must not be blank")
    @Pattern(regexp = "^[A-Za-z0-9+_.-]+@(.+)$", message = "Please provide a valid email")
    private String email;

    @NotBlank(message = "Confirm password must not be blank")
    @Size(min = 5, message = "Confirm password must be at least 5 characters long")
    @Transient
    private String confirmPassword;
}
