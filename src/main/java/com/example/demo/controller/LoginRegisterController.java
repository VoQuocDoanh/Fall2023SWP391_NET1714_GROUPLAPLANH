package com.example.demo.controller;

import com.example.demo.dto.LoginDTO;
import com.example.demo.entity.User;
import com.example.demo.response.ResponseObject;
import com.example.demo.service.LoginRegisterService;
import com.example.demo.service.UserService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping(path = "/api/user")
public class LoginRegisterController {

    @Autowired
    private LoginRegisterService loginRegisterService;

    @PostMapping(path = "/register")
    public ResponseEntity<?> saveUser(@Valid @RequestBody User user){
        ResponseObject responseObject = loginRegisterService.registerUser(user);
        return ResponseEntity.ok(responseObject);
    }

    @PostMapping(path = "/login")
    public ResponseEntity<?> loginUser (@Valid @RequestBody LoginDTO loginDTO){
        ResponseObject responseObject = loginRegisterService.loginUser(loginDTO);
        return ResponseEntity.ok(responseObject);
    }






}
