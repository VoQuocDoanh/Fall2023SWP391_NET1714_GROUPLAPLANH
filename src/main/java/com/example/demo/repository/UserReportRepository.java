package com.example.demo.repository;

import com.example.demo.entity.User;
import com.example.demo.entity.UserReport;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface UserReportRepository extends JpaRepository<UserReport,Long> {

    List<UserReport> findByIdReportedUser(Long id);
}
