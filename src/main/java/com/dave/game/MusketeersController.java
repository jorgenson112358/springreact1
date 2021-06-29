package com.dave.game;

import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.ArrayList;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.GetMapping;

@RestController
@RequestMapping("/api/")
public class MusketeersController {

	@GetMapping("musketeers")
	public List<String> getCharacters() {
		List<String> response = new ArrayList<String>();

		response.add("Athos");
		response.add("Porthos");
		response.add("Aramis");
		response.add("and d'Artagnan!");

		return response;
	}
}