package com.example.characterroleplayserver.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


//User class; defines values for each user on the website
@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserModel {
    @Id
    private String username;
    private String password;
}
