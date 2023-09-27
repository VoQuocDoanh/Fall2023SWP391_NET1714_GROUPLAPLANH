package com.example.demo.implement;

import com.example.demo.entity.User;
import com.example.demo.repository.UserRepository;
import com.example.demo.response.ResponseObject;
import com.example.demo.service.UserService;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Transactional
@RequiredArgsConstructor
@Slf4j
@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public ResponseEntity<ResponseObject> addUser(User user) {
        Optional<User> foundUser = userRepository.findUserByUsername(user.getUsername().trim());
        if (foundUser.isEmpty()) {
            User us = new User(null, user.getUsername(),
                    this.passwordEncoder.encode(user.getPassword()),
                    user.getFullName(),
                    user.getMail(),
                    user.getRole(),
                    user.getStatus(),
                    user.getBeats());
            userRepository.save(us);
            return ResponseEntity.status(HttpStatus.OK).body(
                    new ResponseObject("SUCCESS", "Signup Success", us));
        }
        return ResponseEntity.status(HttpStatus.FOUND).body(
                new ResponseObject("FAILED", "Signup Failed", ""));
    }
}
