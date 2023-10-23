//
// Source code recreated from a .class file by IntelliJ IDEA
// (powered by FernFlower decompiler)
//

package com.example.demo.controller;

import com.example.demo.dto.UserDTO;
import com.example.demo.dto.UserResponeDTO;
import com.example.demo.entity.User;
import com.example.demo.service.UserService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path = {"/api/v1/user"})
public class UserController {

    @Autowired
    private UserService userService;

    // Edit information (fullname, password, address...)
    @PutMapping("/{id}")
    public ResponseEntity<String> updateInformation(@Valid @RequestBody UserDTO user, @PathVariable Long id){
        return this.userService.updateInfomation(user, id);
    }

    // Get detail User
    @GetMapping("/{id}")
    public ResponseEntity<UserResponeDTO> getDetailUser_User(@PathVariable Long id){
        return ResponseEntity.ok(this.userService.getDetailUser_User(id));
    }

}
