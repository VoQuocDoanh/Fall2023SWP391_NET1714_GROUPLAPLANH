package com.example.demo.service;

import com.example.demo.dto.BeatDTO;
import com.example.demo.entity.Beat;
import com.example.demo.entity.Genre;
import com.example.demo.entity.User;
import com.example.demo.repository.GenreRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Transactional
@RequiredArgsConstructor
@Slf4j
@Service
public class GenreService {

    private GenreRepository genreRepository;

    public List<Genre> findAllGenre() {
        List<Genre> genres = this.genreRepository.findAll();
        if (genres.isEmpty()) {
            return null;
        } else {
            return new ArrayList<>(genres);
        }
    }

}
