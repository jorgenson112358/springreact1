export async function getCharacters() { 
	const response = await fetch("/api/characters");

	return await response.json();
}

export async function getMusketeers() { 
	const response = await fetch("/api/musketeers");

	return await response.json();
}

export async function getBooks() {
	const response = await fetch("/api/books");
	
	return await response.json();
}