export async function searchBooksGetController(req, res) {
	const books = await searchBookFromApi(req.query.search);

	if (books.results.length === 0) {
		res.status(404).send();

		return;
	}

	res.status(200).send({ result: books.results });
}

function searchBookFromApi(query) {
	return fetch(`https://gutendx.com/books?s==${query}`).then((response) => response.json());
}
