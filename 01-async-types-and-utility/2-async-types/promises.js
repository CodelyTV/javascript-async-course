function searchBook(query) {
	return fetch(`https://gutendex.com/books?search=${query}`).then((response) => response.json());
}

searchBook("Frankenstein");
