package com.example.demo.database;

import com.example.demo.Entity.Beat;
import com.example.demo.repository.BeatRepository;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.logging.Logger;

@Configuration
public class Database {
    @Bean
    CommandLineRunner initDatabase(BeatRepository beatRepository){
        return new CommandLineRunner() {
            @Override
            public void run(String... args) throws Exception {
                Beat beatA =new Beat("Die for you","def",10.0,1 );
                System.out.println("insert date: "+beatRepository.save(beatA));
            }
        };
    }
}
