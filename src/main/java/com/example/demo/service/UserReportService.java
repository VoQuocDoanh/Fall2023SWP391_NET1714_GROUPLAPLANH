package com.example.demo.service;

import com.example.demo.dto.ReportDTO;
import com.example.demo.dto.ReportResponseDTO;
import com.example.demo.dto.UserResponeDTO;
import com.example.demo.entity.Song;
import com.example.demo.entity.SongReport;
import com.example.demo.entity.User;
import com.example.demo.entity.UserReport;
import com.example.demo.repository.UserReportRepository;
import com.example.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class UserReportService {

    @Autowired
    UserRepository userRepository;

    @Autowired
    UserReportRepository userReportRepository;

    public ResponseEntity<String> report(ReportDTO reportDTO) {
        Optional<User> foundUser = this.userRepository.findUserByIdAndStatus(reportDTO.getUserId(), 1);
        if (foundUser.isPresent()) {
            Optional<User> foundReportedUser = userRepository.findUserByIdAndStatus(reportDTO.getUserReported(), 1);
            if (foundReportedUser.isPresent()) {
                UserReport userReport = new UserReport(
                        reportDTO.getContent(),
                        foundReportedUser.get().getId(),
                        foundUser.get()
                );
                userReportRepository.save(userReport);
                foundReportedUser.get().setReport(foundReportedUser.get().getReport() + 1);
                userRepository.save(foundReportedUser.get());
                return new ResponseEntity<>("Report Successfully!", HttpStatus.OK);
            }
            return new ResponseEntity<>("User report not found!", HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>("User not found!", HttpStatus.NOT_FOUND);
    }

    private UserResponeDTO getUser(User user){
        return new UserResponeDTO(user.getId(), user.getFullName());
    }


    public List<ReportResponseDTO> viewReport(Long id) {
        Optional<User> foundUser = this.userRepository.findUserByIdAndStatus(id, 1);
        if(foundUser.isPresent()){
            List<UserReport> foundReports = userReportRepository.findByIdReportedUser(foundUser.get().getId());
            //List<SongReport> foundReports = this.userRepository.findSongReportsBySongOfReport(song);
            if(!foundReports.isEmpty()){
                List<ReportResponseDTO> dtos = new ArrayList<>();
                for (UserReport value: foundReports) {
                    ReportResponseDTO dto = new ReportResponseDTO(
                            value.getId(),
                            value.getCreatedAt(),
                            value.getContent(),
                            getUser(value.getReportByUser()),
                            getUser(foundUser.get())
                           );
                    dtos.add(dto);
                }
                return dtos;
            }
            return null;
        }
        return null;
    }
}
