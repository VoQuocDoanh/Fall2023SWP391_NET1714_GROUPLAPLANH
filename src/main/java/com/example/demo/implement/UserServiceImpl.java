package com.example.demo.implement;

import com.example.demo.dto.UserDTO;
import com.example.demo.entity.User;
import com.example.demo.repository.UserRepository;
import com.example.demo.response.ResponseObject;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Transactional
@RequiredArgsConstructor
@Slf4j
@Service
public class UserServiceImpl {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public ResponseEntity<ResponseObject> addUser(User user) {
        Optional<User> foundUser = userRepository.findUserByUsername(user.getUsername().trim());
        if (foundUser.isEmpty()) {
            User us = new User(user.getUsername(),
                    this.passwordEncoder.encode(user.getPassword()),
                    user.getFullName(),
                    user.getMail(),
                    user.getRole(),
                    user.getStatus());
            userRepository.save(us);
            return ResponseEntity.status(HttpStatus.OK).body(
                    new ResponseObject("SUCCESS", "Signup Success", us));
        }
        return ResponseEntity.status(HttpStatus.FOUND).body(
                new ResponseObject("FAILED", "Signup Failed", ""));
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
