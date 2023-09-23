package com.example.demo.service;


import com.example.demo.entity.User;
import com.example.demo.repository.UserRepository;
import com.example.demo.response.ResponseObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public ResponseEntity<ResponseObject> findById(Long id){
        Optional<User> foundUser= userRepository.findById(id);
        if (foundUser.isPresent()){
            return ResponseEntity.status(HttpStatus.OK).body(
                    new ResponseObject("OK","Query product successfully",foundUser)

            );

        }else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(
                    new ResponseObject("false","Cannot find beat with id= "+id,"")
            );
        }
    }


    public ResponseEntity<ResponseObject> updateBeat(User newUser, Long id) {
        Optional<User> updateUser = userRepository.findById(id)
                .map(user -> {

                    user.setStatus(newUser.getStatus());
                    return userRepository.save(newUser);
                });
        return ResponseEntity.status(HttpStatus.OK).body(
                new ResponseObject("OK","Update successfully","")
        );
    }

}
