//
// Source code recreated from a .class file by IntelliJ IDEA
// (powered by FernFlower decompiler)
//

package com.example.demo.controller;

import com.example.demo.dto.LoginDTO;
import com.example.demo.entity.User;
import com.example.demo.response.ResponseObject;
import com.example.demo.service.LoginRegisterService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping(
        path = {"/api/user"}
)
public class LoginRegisterController {
    @Autowired
    private LoginRegisterService loginRegisterService;

    public LoginRegisterController() {
    }

    @PostMapping(
            path = {"/register"}
    )
    public ResponseEntity<?> saveUser(@RequestBody @Valid User user) {
        ResponseObject responseObject = this.loginRegisterService.registerUser(user);
        return ResponseEntity.ok(responseObject);
    }

    @PostMapping(
            path = {"/login"}
    )
    public ResponseEntity<?> loginUser(@RequestBody @Valid LoginDTO loginDTO) {
        ResponseObject responseObject = this.loginRegisterService.loginUser(loginDTO);
        return ResponseEntity.ok(responseObject);
    }
}
