package com.efub.clone.acmicpc.web;

import com.efub.clone.acmicpc.service.UserService;
import com.efub.clone.acmicpc.web.dto.UserResponseDto;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RestController
public class UserController {
    private final UserService userService;

    @GetMapping("/user/{id}")
    public UserResponseDto findById(@PathVariable String id){
        return userService.findById(id);
    }
}
