package com.example.demo.controller;

import com.example.demo.dto.AuthenRequest;
import com.example.demo.dto.AuthenRespone;
import com.example.demo.dto.UserDTO;
import com.example.demo.jwt.JwtTokenProvider;
import com.example.demo.service.UserService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = {"/api/auth"})
public class AuthenController {

    @Autowired
    private JwtTokenProvider jwtTokenProvider;

    @Autowired
    private UserService userService;

    // Register a new account
    @PostMapping(path = "/register")
    public ResponseEntity<String> register(@Valid @RequestBody UserDTO userDTO){
        return this.userService.signup(userDTO);
    }

    // Login to authentication
    @PostMapping(path = "/login")
    public ResponseEntity<AuthenRespone> login(@Valid @RequestBody AuthenRequest authenRequest){
        return ResponseEntity.ok(this.jwtTokenProvider.authenticate(authenRequest));
    }
}
