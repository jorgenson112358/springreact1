package com.dave.game;

public class Character {
	private String name;
	private String race;
	private String charClass;

	public Character(String _n, String _r, String _cc) {
		name = _n;
		race = _r;
		charClass = _cc;
	}

	public String getName() {
		return name;
	}

	public String getRace() {
		return race;
	}

	public String getCharClass() {
		return charClass;
	}
}