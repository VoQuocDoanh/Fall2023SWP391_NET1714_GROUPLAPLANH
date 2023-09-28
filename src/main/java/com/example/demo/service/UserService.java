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
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Service;

@Service
public interface UserService extends UserDetailsService {

    ResponseEntity<ResponseObject> addUser(User user);

    ResponseEntity<ResponseObject> findById(Long id);

    ResponseEntity<ResponseObject> updateBeat(User newUser, Long id);

    ResponseEntity<ResponseObject> searchByUserName(UserDTO userDTO);

}
