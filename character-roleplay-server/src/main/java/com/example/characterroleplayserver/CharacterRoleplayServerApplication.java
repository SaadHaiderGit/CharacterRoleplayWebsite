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
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;
import java.util.Arrays;

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
			userRepo.save(new UserModel("Hamza", "67890"));
			userRepo.save(new UserModel("Billy", "FriendlyFriend"));
			userRepo.save(new UserModel("Empty", "NoArgs"));
		};
	}

	@Bean
	public CorsFilter corsFilter() {
		UrlBasedCorsConfigurationSource urlBasedCorsConfigurationSource = new UrlBasedCorsConfigurationSource();
		CorsConfiguration corsConfiguration = new CorsConfiguration();
		corsConfiguration.setAllowCredentials(true);
		corsConfiguration.setAllowedOrigins(Arrays.asList("http://localhost:3000", "http://localhost:4200"));
		corsConfiguration.setAllowedHeaders(Arrays.asList("Origin", "Access-Control-Allow-Origin", "Content-Type",
				"Accept", "Jwt-Token", "Authorization", "Origin, Accept", "X-Requested-With",
				"Access-Control-Request-Method", "Access-Control-Request-Headers"));
		corsConfiguration.setExposedHeaders(Arrays.asList("Origin", "Content-Type", "Accept", "Jwt-Token", "Authorization",
				"Access-Control-Allow-Origin", "Access-Control-Allow-Origin", "Access-Control-Allow-Credentials", "Filename"));
		corsConfiguration.setAllowedMethods(Arrays.asList("GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"));
		urlBasedCorsConfigurationSource.registerCorsConfiguration("/**", corsConfiguration);
		return new CorsFilter(urlBasedCorsConfigurationSource);
	}



}
