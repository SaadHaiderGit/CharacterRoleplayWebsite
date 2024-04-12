package com.example.characterroleplayserver.service.implementation;

import com.example.characterroleplayserver.model.CharacterModel;
import com.example.characterroleplayserver.repo.CharacterRepo;
import com.example.characterroleplayserver.service.CharacterService;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.Collection;

import static java.lang.Boolean.TRUE;

@RequiredArgsConstructor
@Service
@Transactional
@Slf4j
public class CharacterServiceImplementation implements CharacterService {
    private final CharacterRepo characterRepo;

    @Override
    public CharacterModel create(CharacterModel character) {
        log.info("Saving new character: {}", character.getChar_name());
        return characterRepo.save(character);
    }

    @Override
    public CharacterModel get(Long char_id) {
        log.info("Finding character with ID: {}", char_id);
        return characterRepo.findById(char_id).get();
    }

    @Override
    public CharacterModel update(CharacterModel character) {
        log.info("Updating character: {}", character.getChar_name());
        return characterRepo.save(character);
    }

    @Override
    public Boolean delete(Long char_id) {
        log.info("Finding character with ID: {}", char_id);
        characterRepo.deleteById(char_id);
        return TRUE;
    }

    @Override
    public Collection<CharacterModel> list() {
        log.info("Fetching ALL characters");
        return characterRepo.findAll();
    }

    @Override
    public Collection<CharacterModel> listByUser(String username) {
        log.info("Fetching characters created by: {}", username);
        return characterRepo.findByUsername(username);
    }
}
