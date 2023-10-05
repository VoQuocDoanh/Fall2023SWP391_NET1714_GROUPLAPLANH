package com.example.demo.service;

import com.example.demo.dto.OrderDTO;
import com.example.demo.entity.Beat;
import com.example.demo.entity.Order;
import com.example.demo.entity.User;
import com.example.demo.repository.BeatRepository;
import com.example.demo.repository.OrderRepository;
import com.example.demo.repository.UserRepository;
import jakarta.validation.constraints.NotNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@Service
public class OrderService {
    @Autowired
    private BeatRepository beatRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private OrderRepository orderRepository;

    public ResponseEntity<String> orderBeat(OrderDTO orderDTO, Long Id) {
        List<Long> listBeat = orderDTO.getBeatId();
        List<Beat> beats=new ArrayList<>();
        double totalPrice=0;
        Optional<User> user=userRepository.findById(Id);
        for (int i = 0; i < listBeat.size(); i++) {
            Beat foundBeat = beatRepository.findBeatById(listBeat.get(i));
            if (foundBeat.getStatus() == -1) {
                return new ResponseEntity<>("Beat bought", HttpStatus.NOT_IMPLEMENTED);
            }
            totalPrice=totalPrice + foundBeat.getPrice();
            beats.add(foundBeat);
            foundBeat.setStatus(-1);
        }
        Double price=totalPrice;
        Order newOrder=new Order(beats,user.get(),price);
        orderRepository.save(newOrder);

        return new ResponseEntity<>("Order successfullly", HttpStatus.OK);
    }




















}
