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
    private int status;


    public UserResponeDTO(String fullName) {
        this.fullName = fullName;
    }

    public UserResponeDTO(Long id, String fullName) {
        this.id = id;
        this.fullName = fullName;
    }
}
