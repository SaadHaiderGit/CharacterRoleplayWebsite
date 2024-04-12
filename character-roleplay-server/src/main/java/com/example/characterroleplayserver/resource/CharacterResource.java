package com.example.characterroleplayserver.resource;

import com.example.characterroleplayserver.model.CharacterModel;
import com.example.characterroleplayserver.model.MsgResponse;
import com.example.characterroleplayserver.service.implementation.CharacterServiceImplementation;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

import static java.time.LocalDateTime.now;
import static org.springframework.http.HttpStatus.CREATED;
import static org.springframework.http.HttpStatus.OK;

@RestController
@RequestMapping(path = "/character")
@RequiredArgsConstructor
public class CharacterResource {
    private final CharacterServiceImplementation characterService;

    @GetMapping(path = "/list")
    public ResponseEntity<MsgResponse> getCharacters() {
        return ResponseEntity.ok(
                MsgResponse.builder()
                        .timeStamp(now())
                        .data(Map.of("characters", characterService.list()))
                        .msg("Got ALL characters")
                        .status(OK)
                        .statusCode(OK.value())
                        .build()
        );
    }

    @GetMapping(path = "/list/{username}")
    public ResponseEntity<MsgResponse> getCharactersByUsername(@PathVariable("username") String username) {
        return ResponseEntity.ok(
                MsgResponse.builder()
                        .timeStamp(now())
                        .data(Map.of("characters", characterService.listByUser(username)))
                        .msg("Got characters made by given username")
                        .status(OK)
                        .statusCode(OK.value())
                        .build()
        );
    }

    @PostMapping(path = "/save")
    public ResponseEntity<MsgResponse> saveCharacter(@RequestBody @Valid CharacterModel character) {
        return ResponseEntity.ok(
                MsgResponse.builder()
                        .timeStamp(now())
                        .data(Map.of("character", characterService.create(character)))
                        .msg("Character was created")
                        .status(CREATED)
                        .statusCode(CREATED.value())
                        .build()
        );
    }

    @GetMapping(path = "/get/{char_id}")
    public ResponseEntity<MsgResponse> getCharacter(@PathVariable("char_id") Long char_id) {
        return ResponseEntity.ok(
                MsgResponse.builder()
                        .timeStamp(now())
                        .data(Map.of("character", characterService.get(char_id)))
                        .msg("Character retrieved")
                        .status(OK)
                        .statusCode(OK.value())
                        .build()
        );
    }

    @PutMapping(path = "/update/{char_id}")
    public ResponseEntity<MsgResponse> updateCharacter(@PathVariable("char_id") Long char_id, @RequestBody @Valid CharacterModel character) {
        return ResponseEntity.ok(
                MsgResponse.builder()
                        .timeStamp(now())
                        .data(Map.of("character", characterService.update(character)))
                        .msg("Character was updated")
                        .status(OK)
                        .statusCode(OK.value())
                        .build()
        );
    }

    @DeleteMapping(path = "/delete/{char_id}")
    public ResponseEntity<MsgResponse> deleteCharacter(@PathVariable("char_id") Long char_id) {
        return ResponseEntity.ok(
                MsgResponse.builder()
                        .timeStamp(now())
                        .data(Map.of("deleted", characterService.delete(char_id)))
                        .msg("Character deleted")
                        .status(OK)
                        .statusCode(OK.value())
                        .build()
        );
    }
}
