//
// Source code recreated from a .class file by IntelliJ IDEA
// (powered by FernFlower decompiler)
//

package com.example.demo.controller;

import com.example.demo.dto.UserDTO;
import com.example.demo.dto.UserResponeDTO;
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

    @GetMapping("/active")
    public ResponseEntity<String> activeAccount(@Valid @RequestParam("activetoken") String token){
        return this.userService.activateUserAccount(token);
    }

    // Update Customer Info
    @PatchMapping("/customer/{id}")
    public ResponseEntity<String> updateUserInfo(@Valid @RequestBody UserDTO userDTO, @PathVariable Long id){
        return this.userService.updateUserInfo(userDTO, id);
    }

    // Get detail User
    @GetMapping("/{id}")
    public ResponseEntity<UserResponeDTO> getDetailUser_User(@PathVariable Long id){
        return ResponseEntity.ok(this.userService.getDetailUser_User(id));
    }

    // Update Musician Info
    @PatchMapping("/musician/{id}")
    public ResponseEntity<String> updateMusicianInfo(@Valid @RequestBody UserDTO userDTO, @Valid @PathVariable Long id){
        return this.userService.updateMusicianInfo(userDTO, id);
    }
}
