package com.example.demo.repository;

import com.example.demo.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {

    Optional<User> findUserByUsernameAndPass (String username, String pass);
    User findUserByUsername(String username);

    Optional<User> findByUsername(String username);
   // org.apache.el.stream.Optional findById();
}
