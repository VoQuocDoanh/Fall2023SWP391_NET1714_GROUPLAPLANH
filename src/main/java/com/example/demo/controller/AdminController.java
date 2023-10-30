package com.example.demo.controller;

import com.example.demo.dto.PaginationResponseDTO;
import com.example.demo.dto.UserDTO;
import com.example.demo.entity.User;
import com.example.demo.service.UserService;
import com.example.demo.validationgroups.UpdateValidation;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping(path = {"/api/v1/admin"})
public class AdminController {

    @Autowired
    private UserService userService;

    // Update Admin Info
    @PatchMapping
    public ResponseEntity<String> updateAdminInfo(@Validated(UpdateValidation.Admin.class) @RequestBody UserDTO userDTO){
        return this.userService.updateAdminInfo(userDTO);
    }

    //List all User in Admin
    @GetMapping("{page}/10")
    public ResponseEntity<PaginationResponseDTO> getAllUsers(@PathVariable int page) {
        return ResponseEntity.ok(this.userService.getAllUsers(page));
    }

    //Get detail User
    @GetMapping(path = {"/{id}"})
    public ResponseEntity<User> getDetailUser_Admin(@Valid @PathVariable Long id) {
        return ResponseEntity.ok(this.userService.getDetailUser_Admin(id));
    }

    //Ban user
    @PostMapping()
    public ResponseEntity<String> banUser(@RequestBody UserDTO userDTO) {
        return this.userService.banUser(userDTO);
    }

    //Search user by name
    @GetMapping("/username")
    public ResponseEntity<List<User>> searchByUserName(@RequestParam("username") String name) {
        return ResponseEntity.ok(this.userService.searchByUserName(name));
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
