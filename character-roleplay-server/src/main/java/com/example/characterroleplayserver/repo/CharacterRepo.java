package com.example.characterroleplayserver.repo;

import com.example.characterroleplayserver.model.CharacterModel;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;


//interface for custom character functions, and for JPA extensions
public interface CharacterRepo extends JpaRepository<CharacterModel, Long> {
    List<CharacterModel> findByUsername(String username);
}
