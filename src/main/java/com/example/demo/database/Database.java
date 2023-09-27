package com.example.demo.database;

import com.example.demo.repository.BeatRepository;
import com.example.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
public class Database {
    @Bean
    CommandLineRunner initDatabase(BeatRepository beatRepository, UserRepository userRepository) {
        return new CommandLineRunner() {
            @Autowired
            private PasswordEncoder passwordEncoder;

            @Override
            public void run(String... args) throws Exception {
//                Beat beatA = new Beat("Die for you", "def", "none", 10.0, 1);
//                Beat beatB = new Beat("Dieing for you", "def", "none", 10.0, 1);
//                System.out.println("insert date: " + beatRepository.save(beatA));
//                System.out.println("insert date: " + beatRepository.save(beatB));

//                User admin = new User("admin", "1", "toi la admin", "", "AD");
             //   User customer = new User("user", this.passwordEncoder.encode("1"), "toi la user", "", "US",1);
//                System.out.println("insert date: " + userRepository.save(admin));
               // System.out.println("insert date: " + userRepository.save(customer));
            }
        };
    }
}
