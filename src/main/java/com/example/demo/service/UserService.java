package com.example.demo.service;

import com.example.demo.entity.User;
import com.example.demo.response.ResponseObject;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UserDetailsService;

public interface UserService {
    ResponseEntity<ResponseObject> addUser(User user);

}
