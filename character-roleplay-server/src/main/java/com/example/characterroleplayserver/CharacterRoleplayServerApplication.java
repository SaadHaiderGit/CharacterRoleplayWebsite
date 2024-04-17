package com.example.characterroleplayserver;

import com.example.characterroleplayserver.model.CharacterModel;
import com.example.characterroleplayserver.model.UserModel;
import com.example.characterroleplayserver.repo.CharacterRepo;
import com.example.characterroleplayserver.repo.UserRepo;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@SpringBootApplication
@RestController
public class CharacterRoleplayServerApplication {

	public static void main(String[] args) {
		SpringApplication.run(CharacterRoleplayServerApplication.class, args);
	}

//	@GetMapping
//	public List<String> Hello() {
//		return List.of("Hello", "World");
//	}

	@Bean
	CommandLineRunner run(CharacterRepo characterRepo, UserRepo userRepo) {
		return args -> {
			characterRepo.save(new CharacterModel(null, "Saad", "Gavil Slayer", "Elf",
					"Wizard", "Hunter of goblins", "Staff"));
			characterRepo.save(new CharacterModel(null, "Saad", "Manza", "Demon",
					"Fighter", "A danger to the city", "None"));
			characterRepo.save(new CharacterModel(null, "Hamza", "David Erasictar", "Human",
					"Inspector", "Watcher of the city", "Bow"));
			characterRepo.save(new CharacterModel(null, "Billy", "Sansa Dale", "Skeleton",
					"Healer", "helps people", "Sword"));
					
			userRepo.save(new UserModel("Saad", "12345"));
			userRepo.save(new UserModel("Hamza", "ActualPassword"));
			userRepo.save(new UserModel("Billy", "FriendlyFriend"));
		};
	}


}
