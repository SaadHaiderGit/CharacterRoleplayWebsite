package com.example.characterroleplayserver.service;

import com.example.characterroleplayserver.model.UserModel;

import java.util.Collection;

//Functions for handling user SQL activities
public interface UserService {
    UserModel get(String username);
    Collection<UserModel> list();
}
