//
// Source code recreated from a .class file by IntelliJ IDEA
// (powered by FernFlower decompiler)
//

package com.example.demo.controller;

import com.example.demo.dto.UserDTO;
import com.example.demo.dto.UserResponeDTO;
import com.example.demo.service.UserService;
import com.example.demo.validationgroups.UpdateValidation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping(path = {"/api/v1/user"})
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/active")
    public ResponseEntity<String> activeAccount(@RequestParam("activetoken") String token){
        return this.userService.activateUserAccount(token);
    }

    // Update Customer Info
    @PatchMapping("/customer")
    public ResponseEntity<String> updateUserInfo(@RequestPart("file")MultipartFile image, @Validated(UpdateValidation.User.class) @RequestPart("json") UserDTO userDTO){
        return this.userService.updateUserInfo(userDTO, image);
    }

    // Get detail User
    @GetMapping("/{id}")
    public ResponseEntity<UserResponeDTO> getDetailUser_User(@PathVariable Long id){
        return ResponseEntity.ok(this.userService.getDetailUser_User(id));
    }

    // Update Musician Info
    @PatchMapping("/musician")
    public ResponseEntity<String> updateMusicianInfo(@RequestPart("file")MultipartFile image, @Validated(UpdateValidation.Musician.class) @RequestPart("json") UserDTO userDTO){
        return this.userService.updateMusicianInfo(userDTO, image);
    }

    @ExceptionHandler(MethodArgumentNotValidException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)  // Nếu validate fail thì trả về 400
    public Map<String, String> handleBindException(MethodArgumentNotValidException ex) {

        Map<String, String> errors = new HashMap<>();
        ex.getBindingResult().getAllErrors().forEach((objectError -> {
            String fieldName = ((FieldError) objectError).getField();
            String errorMsg = objectError.getDefaultMessage();
            errors.put(fieldName, errorMsg);
        }));
        return errors;
    }
}
