//
// Source code recreated from a .class file by IntelliJ IDEA
// (powered by FernFlower decompiler)
//

package com.example.demo.service;

import com.example.demo.dto.UserDTO;
import com.example.demo.dto.UserResponeDTO;
import com.example.demo.entity.User;
import com.example.demo.repository.UserRepository;
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
import java.util.stream.Collectors;

@Transactional
@RequiredArgsConstructor
@Slf4j
@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public ResponseEntity<String> addUser(User user) {
        Optional<User> foundUser = userRepository.findUserByUsername(user.getUsername());
        if (foundUser.isEmpty()) {
            User us = new User(user.getUsername(),
                    this.passwordEncoder.encode(user.getPassword()),
                    user.getFullName(),
                    user.getGender(),
                    user.getMail(),
                    user.getAddress(),
                    user.getPhoneNumber(),
                    user.getRole(),
                    1);
            this.userRepository.save(us);
            return new ResponseEntity<>("Signup Successfully", HttpStatus.OK);
        }
        return new ResponseEntity<>("Signup Failed", HttpStatus.NOT_IMPLEMENTED);
    }

    public User getDetailUser_Admin(Long id) {
        Optional<User> foundUser = this.userRepository.findById(id);
        if (foundUser.isPresent()) {
            return this.userRepository.findById(id).orElseThrow();
        }
        return null;
    }

    public UserResponeDTO getDetailUser_User(Long id) {
        Optional<User> foundUser = this.userRepository.findById(id);
        if(foundUser.isPresent()){
            User user = foundUser.get();
            UserResponeDTO dto = new UserResponeDTO();
            dto.setId(user.getId());
            dto.setUsername(user.getUsername());
            dto.setFullName(user.getFullName());
            dto.setGender(user.getGender().toString());
            return dto;
        }
        return null;
    }

    public ResponseEntity<String> banUser(User newUser, Long id) {
        Optional<User> foundUser = this.userRepository.findById(id);
        if(foundUser.isPresent()){
            User user = foundUser.get();
            user.setStatus(newUser.getStatus());
            this.userRepository.save(user);
            return new ResponseEntity<>("Ban Successfully", HttpStatus.OK);
        }else {
            return new ResponseEntity<>("Ban Failed", HttpStatus.NOT_IMPLEMENTED);
        }
    }

    public ResponseEntity<String> updateInfomation(User newUser, Long id){
        Optional<User> foundUser = this.userRepository.findById(id);
        if(foundUser.isPresent()) {
            User user = foundUser.get();
            user.setFullName(newUser.getFullName());
            user.setGender(newUser.getGender());
            user.setMail(newUser.getMail());
            user.setPhoneNumber(newUser.getPhoneNumber());
            user.setAddress(newUser.getAddress());
            this.userRepository.save(user);
            return new ResponseEntity<>("Update Successfully", HttpStatus.OK);
        }else {
            return new ResponseEntity<>("Update Failed", HttpStatus.NOT_IMPLEMENTED);
        }
    }

    public List<User> searchByUserName(UserDTO userDTO) {
        List<User> userEntity = this.userRepository.searchByUserName(userDTO.getUsername());
        return userEntity.isEmpty() ? null : userEntity;
    }

    public List<UserResponeDTO> getAllUsers(){
        List<User> userList = this.userRepository.findByOrderByStatusDesc();
        List<UserResponeDTO> userResponeDTOList;
        if (userList.isEmpty()){
            return null;
        } else {
            userResponeDTOList = userList.stream().map(user -> new UserResponeDTO(
                    user.getId(),
                    user.getUsername(),
                    user.getFullName(),
                    user.getGender().toString(),
                    user.getRole(),
                    user.getStatus())).collect(Collectors.toList());
            return userResponeDTOList;
        }
    }

}
