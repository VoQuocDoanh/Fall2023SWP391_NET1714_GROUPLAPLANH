//
// Source code recreated from a .class file by IntelliJ IDEA
// (powered by FernFlower decompiler)
//

package com.example.demo.service;

import com.example.demo.dto.UserDTO;
import com.example.demo.entity.User;
import com.example.demo.repository.UserRepository;
import com.example.demo.response.ResponseObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public UserService() {
    }

    public ResponseEntity<ResponseObject> findById(Long id) {
        Optional<User> foundUser = this.userRepository.findById(id);
        return foundUser.isPresent() ? ResponseEntity.status(HttpStatus.OK).body(new ResponseObject("OK", "Query product successfully", foundUser)) : ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ResponseObject("false", "Cannot find beat with id= " + id, ""));
    }

    public ResponseEntity<ResponseObject> updateBeat(User newUser, Long id) {
        Optional<User> updateUser = this.userRepository.findById(id).map((user) -> {
            user.setStatus(newUser.getStatus());
            return (User)this.userRepository.save(user);
        });
        return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject("OK", "Update successfully", ""));
    }

    public ResponseEntity<ResponseObject> searchByUserName(UserDTO userDTO) {
        new User();
        String tmp = userDTO.getUsername();
        List<User> userEntity = this.userRepository.searchByUserName(userDTO.getUsername());
        return userEntity.isEmpty() ? ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ResponseObject("false", "Cannot find user name", "")) : ResponseEntity.status(HttpStatus.OK).body(new ResponseObject("OK", "Query product successfully", userEntity));
    }
}
