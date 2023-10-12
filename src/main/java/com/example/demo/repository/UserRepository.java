//
// Source code recreated from a .class file by IntelliJ IDEA
// (powered by FernFlower decompiler)
//

package com.example.demo.repository;

import com.example.demo.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    Optional<User> findUserByUsername(String username);

    List<User> findByOrderByStatusDesc();

    @Query("SELECT u FROM User u WHERE u.username = :username")
    User findByUsernameDesc(String username);

    @Query("SELECT u FROM User u WHERE u.username = :username")
    User findByUsername(String username);

    @Query("SELECT u FROM User u WHERE u.fullName like %:fullName%")
    List<User> findByfullName(String fullName);

    @Query("SELECT u FROM User u WHERE u.username like %:username%")
    List<User> searchByUserName(String username);
}
