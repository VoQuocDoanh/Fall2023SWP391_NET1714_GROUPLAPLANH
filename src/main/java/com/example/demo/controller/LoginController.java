package com.example.demo.controller;

import com.example.demo.dto.LoginDTO;
import com.example.demo.entity.User;
import com.example.demo.repository.UserRepository;
import com.example.demo.response.ResponseObject;
import com.example.demo.service.UserService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping(path = "/api/login")
public class LoginController {

    @Autowired
    private UserService userService;

    @PostMapping(path = "/save")
    public String saveUser(@Valid @RequestBody User user){
        String id = userService.addUser(user);
        return id;
    }

    @PostMapping(path = "/login")
    public ResponseEntity<?> loginUser (@Valid @RequestBody LoginDTO loginDTO){
        ResponseObject responseObject = userService.loginUser(loginDTO);
        return ResponseEntity.ok(responseObject);
    }






}
