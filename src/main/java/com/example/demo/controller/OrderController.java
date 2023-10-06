package com.example.demo.controller;

import com.example.demo.dto.OrderDTO;
import com.example.demo.service.OrderService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path = "api/v1/Order")
public class OrderController {
    @Autowired
    private OrderService orderService;

    @PostMapping("/user/{id}")
    public ResponseEntity<String> orderBeat(@Valid @RequestBody OrderDTO orderDTO, @PathVariable Long id){
        return orderService.orderBeat(orderDTO,id);
    }

}
