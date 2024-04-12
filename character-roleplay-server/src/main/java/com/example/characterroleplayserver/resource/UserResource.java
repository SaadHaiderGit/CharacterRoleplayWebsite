package com.example.characterroleplayserver.resource;

import com.example.characterroleplayserver.model.MsgResponse;
import com.example.characterroleplayserver.service.implementation.UserServiceImplementation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

import static java.time.LocalDateTime.now;
import static org.springframework.http.HttpStatus.OK;

@RestController
@RequestMapping(path = "/user")
@RequiredArgsConstructor
public class UserResource {
    private final UserServiceImplementation userService;

    @GetMapping(path = "/list")
    public ResponseEntity<MsgResponse> getUsers() {
        return ResponseEntity.ok(
                MsgResponse.builder()
                        .timeStamp(now())
                        .data(Map.of("users", userService.list()))
                        .msg("Got ALL users")
                        .status(OK)
                        .statusCode(OK.value())
                        .build()
        );
    }

    @GetMapping(path = "/get/{username}")
    public ResponseEntity<MsgResponse> getUser(@PathVariable("username") String username) {
        return ResponseEntity.ok(
                MsgResponse.builder()
                        .timeStamp(now())
                        .data(Map.of("user", userService.get(username)))
                        .msg("User retrieved")
                        .status(OK)
                        .statusCode(OK.value())
                        .build()
        );
    }

}
