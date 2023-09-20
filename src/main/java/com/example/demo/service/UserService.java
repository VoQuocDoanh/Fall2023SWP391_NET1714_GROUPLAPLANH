package com.example.demo.service;

import com.example.demo.dto.LoginDTO;
import com.example.demo.entity.User;
import com.example.demo.response.ResponseObject;
import org.springframework.stereotype.Service;

public interface UserService {
    String addUser(User user);
    ResponseObject loginUser(LoginDTO loginDTO);

}
