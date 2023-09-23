package com.example.demo.controller;


import com.example.demo.entity.Beat;
import com.example.demo.entity.User;
import com.example.demo.repository.UserRepository;
import com.example.demo.response.ResponseObject;
import com.example.demo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.nio.file.Path;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path = "/api/user")
public class UserController {
    @Autowired
    UserRepository userRepository;

    @Autowired
    private UserService userService;


    //get all users
    @GetMapping(path = "")
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    //get detail user

    @GetMapping(path = "/{id}")
    public ResponseEntity<ResponseObject> findById(@PathVariable Long id) {
        return userService.findById(id);
    }


    //Update
    @PutMapping("/{id}")
    public ResponseEntity<ResponseObject> updateBeat(@RequestBody User newUser, @PathVariable Long id) {
        return userService.updateBeat(newUser, id);
    }


}
