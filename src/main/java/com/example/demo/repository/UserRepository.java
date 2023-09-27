package com.example.demo.repository;

import com.example.demo.entity.User;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    Optional<User> findUserByUsername(String username, String pass);

    List<User> findByOrderByStatusDesc();

    @Query("SELECT u FROM User u WHERE u.username like %:username%")
    List<User> searchByUserName(String username);

    Optional<User> findUserByUsername(String username);
}
