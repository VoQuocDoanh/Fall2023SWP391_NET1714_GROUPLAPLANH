package com.example.demo.database;

import com.example.demo.entity.Beat;
import com.example.demo.entity.User;
import com.example.demo.repository.BeatRepository;
import com.example.demo.repository.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class Database {
    @Bean
    CommandLineRunner initDatabase(BeatRepository beatRepository, UserRepository userRepository){
        return new CommandLineRunner() {
            @Override
            public void run(String... args) throws Exception {
//                Beat beatA =new Beat("Die for you","def",10.0,1 );
                User admin = new User("admin","1","toi la admin", "","AD");
                User user = new User("user","1","toi la user", "","US");
//                System.out.println("insert date: "+beatRepository.save(beatA));
                System.out.println("insert date: "+userRepository.save(admin));
                System.out.println("insert date: "+userRepository.save(user));
            }
        };
    }
}
