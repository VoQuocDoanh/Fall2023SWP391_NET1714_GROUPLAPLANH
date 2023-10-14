package com.example.demo.controller;

import com.example.demo.dto.UserDTO;
import com.example.demo.dto.UserResponeDTO;
import com.example.demo.entity.User;
import com.example.demo.service.UserService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping(path = {"/api/v1/admin"})
public class AdminController {

    @Autowired
    private UserService userService;

    //List all User in Admin
    @GetMapping(path = {""})
    public ResponseEntity<List<UserResponeDTO>> getAllUsers() {
        return ResponseEntity.ok(this.userService.getAllUsers());
    }

    //Get detail User
    @GetMapping(path = {"/{id}"})
    public ResponseEntity<User> getDetailUser_Admin(@Valid @PathVariable Long id) {
        return ResponseEntity.ok(this.userService.getDetailUser_Admin(id));
    }

    //Ban user
    @PutMapping({"/{id}"})
    public ResponseEntity<String> banUser(@Valid @RequestBody User newUser, @PathVariable Long id) {
        return this.userService.banUser(newUser, id);
    }

    //Search user by name
    @GetMapping("/username")
    public ResponseEntity<List<User>> searchByUserName(@Valid @RequestBody UserDTO userDTO) {
        return ResponseEntity.ok(this.userService.searchByUserName(userDTO));
    }
}
