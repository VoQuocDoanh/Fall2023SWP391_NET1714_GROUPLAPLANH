package com.example.demo.jwt;

import com.example.demo.dto.AuthenRequest;
import com.example.demo.dto.AuthenRespone;
import com.example.demo.entity.User;
import com.example.demo.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class JwtTokenProvider {

    private final UserRepository userRepository;
    private final AuthenticationManager authenticationManager;
    private final JwtService jwtService;

    public AuthenRespone authenticate(AuthenRequest authenRequest) {
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(authenRequest.getUsername(), authenRequest.getPassword()));
        User user = userRepository.findUserByUsernameAndStatus(authenRequest.getUsername(), 1).orElseThrow(() -> new UsernameNotFoundException("Customer not found or Customer is banned"));
        var jwtToken = jwtService.generateToken(user);

        return AuthenRespone.builder().token(jwtToken).msg("Login Successfully!").build();
    }
}
