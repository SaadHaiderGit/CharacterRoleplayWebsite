package com.example.characterroleplayserver.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import static jakarta.persistence.GenerationType.AUTO;


//Character class; defines values for a character
@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class CharacterModel {
    @Id
    @GeneratedValue(strategy = AUTO)


    private Long char_id;
    private String username;
    private String char_name;
    private String race;
    private String classtype;
    private String description;
    private String equipment;
}
