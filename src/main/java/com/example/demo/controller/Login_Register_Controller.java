package com.example.demo.controller;

import com.example.demo.dto.AuthenRequest;
import com.example.demo.dto.AuthenRespone;
import com.example.demo.jwt.JwtTokenProvider;
import com.example.demo.entity.User;
import com.example.demo.response.ResponseObject;
import com.example.demo.service.UserService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping(path = "/user/auth")
public class Login_Register_Controller {

    @Autowired
    private JwtTokenProvider jwtTokenProvider;

    @Autowired
    private UserService userService;

    @Autowired
    AuthenticationManager authenticationManager;

    @PostMapping(path = "/signup")
    public ResponseEntity<ResponseObject> saveUser(@Valid @RequestBody User user){
        return userService.addUser(user);
    }

    @PostMapping(path = "/login")
    public ResponseEntity<AuthenRespone> login(@Valid @RequestBody AuthenRequest authenRequest){
        return ResponseEntity.ok(jwtTokenProvider.authenticate(authenRequest));
    }

    @GetMapping(path = "/auth")
    public String login123(){
        return "authen ok rồi đó bro";
    }

}
