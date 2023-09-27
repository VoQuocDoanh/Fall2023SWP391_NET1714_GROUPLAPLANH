package com.example.demo.service;

import com.example.demo.dto.LoginDTO;
import com.example.demo.entity.User;
import com.example.demo.response.ResponseObject;

public interface LoginRegisterService {
    ResponseObject registerUser(User user);
    ResponseObject loginUser(LoginDTO loginDTO);
    boolean CheckUsername(User user);

}
