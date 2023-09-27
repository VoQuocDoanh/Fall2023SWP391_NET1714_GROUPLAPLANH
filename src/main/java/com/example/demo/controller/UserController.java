//
// Source code recreated from a .class file by IntelliJ IDEA
// (powered by FernFlower decompiler)
//

package com.example.demo.controller;

import com.example.demo.dto.UserDTO;
import com.example.demo.entity.User;
import com.example.demo.repository.UserRepository;
import com.example.demo.response.ResponseObject;
import com.example.demo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(
        path = {"user"}
)
public class UserController {
    @Autowired
    UserRepository userRepository;
    @Autowired
    private UserService userService;

    public UserController() {
    }

    @GetMapping(
            path = {""}
    )

    //List all user in AD
    public List<User> getAllUsers() {
        return this.userRepository.findByOrderByStatusDesc();
    }

    //List detail user in AD
    @GetMapping(
            path = {"/{id}"}
    )
    public ResponseEntity<ResponseObject> findById(@PathVariable Long id) {
        return this.userService.findById(id);
    }


    //Update status for US in AD
    @PutMapping({"/{id}"})
    public ResponseEntity<ResponseObject> updateBeat(@RequestBody User newUser, @PathVariable Long id) {
        return this.userService.updateBeat(newUser, id);
    }


    //search US in AD
    @GetMapping("/search")
    public ResponseEntity<ResponseObject> searchByUserName(@RequestBody UserDTO userDTO) {
        return this.userService.searchByUserName(userDTO);
    }
}
