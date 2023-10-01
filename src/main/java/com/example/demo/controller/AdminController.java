package com.example.demo.controller;

import com.example.demo.dto.UserDTO;
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

    //List all user in Admin
    @GetMapping(path = {""})
    public ResponseEntity<List<User>> getAllUsers() {
        return ResponseEntity.ok(this.userService.getAllUsers());
    }

    //Get detail user by id in Admin
    @GetMapping(path = {"/{id}"})
    public ResponseEntity<User> findById(@Valid @PathVariable Long id) {
        return ResponseEntity.ok(this.userService.findById(id));
    }

    //Ban user in Admin
    @PutMapping({"/{id}"})
    public ResponseEntity<String> banUser(@Valid @RequestBody User newUser, @PathVariable Long id) {
        return this.userService.banUser(newUser, id);
    }

    //search user in Admin
    @GetMapping("/search")
    public ResponseEntity<List<User>> searchByUserName(@RequestBody UserDTO userDTO) {
        return ResponseEntity.ok(this.userService.searchByUserName(userDTO));
    }
}
