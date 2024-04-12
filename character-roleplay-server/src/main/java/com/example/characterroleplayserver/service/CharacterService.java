package com.example.characterroleplayserver.service;

import com.example.characterroleplayserver.model.CharacterModel;

import java.util.Collection;

//Functions for handling character SQL activities
public interface CharacterService {
    CharacterModel create(CharacterModel CharacterModel);
    CharacterModel get(Long char_id);
    CharacterModel update(CharacterModel CharacterModel);
    Boolean delete(Long char_id);
    Collection<CharacterModel> list();
    Collection<CharacterModel> listByUser(String username);
}
