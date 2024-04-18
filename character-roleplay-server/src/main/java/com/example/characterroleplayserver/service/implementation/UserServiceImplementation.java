package com.example.characterroleplayserver.service.implementation;

import com.example.characterroleplayserver.model.UserModel;
import com.example.characterroleplayserver.repo.UserRepo;
import com.example.characterroleplayserver.service.UserService;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.Collection;


@RequiredArgsConstructor
@Service
@Transactional
@Slf4j
public class UserServiceImplementation implements UserService {
    private final UserRepo userRepo;

    @Override
    public UserModel get(String username) {
        log.info("Finding username: {}", username);
        return userRepo.findByUsername(username);
    }

    @Override
    public Collection<UserModel> list() {
        log.info("Fetching ALL users");
        return userRepo.findAll();
    }
}
