package com.example.demo.implement;

import com.example.demo.dto.LoginDTO;
import com.example.demo.entity.User;
import com.example.demo.repository.UserRepository;
import com.example.demo.response.ResponseObject;
import com.example.demo.service.LoginRegisterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserServiceImpl implements LoginRegisterService {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    //register

    @Override
    public ResponseObject registerUser(User user) {
        User foundUser = userRepository.findUserByUsername(user.getUsername().trim());
        if(foundUser == null){
            User us = new User(user.getUsername(),
                    this.passwordEncoder.encode(user.getPass()),
                    user.getFullName(),
                    user.getMail(),
                    user.getRoleID(),
                    user.getStatus());
            userRepository.save(us);
            return new ResponseObject("OK", "Register Success", us);
        }
        return new ResponseObject("FAILED", "Register Failed (username duplicated)", "");
    }

    //login
    @Override
    public ResponseObject loginUser(LoginDTO loginDTO) {
        User user = userRepository.findUserByUsername(loginDTO.getUsername());
        if (user != null) {
            String password = loginDTO.getPassword();
            String encodedPassword = user.getPass();
            boolean isPwdRight = passwordEncoder.matches(password, encodedPassword);
            if (isPwdRight) {
                Optional<User> us = userRepository.findUserByUsernameAndPass(loginDTO.getUsername(), encodedPassword);
                if (us.isPresent()) {
                    return new ResponseObject("OK", "Login Success", us);
                } else {
                    return new ResponseObject("BAD_REQUEST", "Login Failed", "");
                }
            } else {
                return new ResponseObject("FAILED", "Password Not Match", "");
            }
        } else {
            return new ResponseObject("FAILED", "Username Not Match", "");
        }
    }

    @Override
    public boolean CheckUsername(User user) {
        return false;
    }
}
