package com.example.characterroleplayserver.repo;

import com.example.characterroleplayserver.model.UserModel;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;


//interface for custom user functions, and for JPA extensions
public interface UserRepo extends JpaRepository<UserModel, Long> {
    UserModel findByUsername(String username);
}
