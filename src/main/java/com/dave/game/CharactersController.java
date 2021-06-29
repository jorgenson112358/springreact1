package com.dave.game;

import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.ArrayList;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.GetMapping;

@RestController
@RequestMapping("/api/")
public class CharactersController {

	@GetMapping("characters")
	public List<Character> getCharacters() {
		List<Character> response = new ArrayList<Character>();

		response.add(new Character("Gandalf", "human?", "wizard"));
		response.add(new Character("Legolas", "elf", "ranger"));
		response.add(new Character("Gimli", "dwarf", "fighter"));

		return response;
	}
}