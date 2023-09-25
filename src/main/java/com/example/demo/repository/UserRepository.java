package com.example.demo.repository;

import com.example.demo.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;


@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    Optional<User> findUserByUsernameAndPass (String username, String pass);
    User findUserByUsername(String username);

//    Optional<User>findByUsername(String username);
//    User findByUsername(String username);
   // org.apache.el.stream.Optional findById();

    List<User> findByOrderByStatusDesc();

    @Query("SELECT u FROM User u WHERE u.username like %:username%")
    List<User> searchByUserName(String username);
    @Query("SELECT u FROM User u WHERE u.username = :userName")
    User findByUsername(String userName);

}
