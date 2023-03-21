export async function searchBooksGetController(req, res) {
  const response = await fetch(
    `https://gutendx.com/books?s=${req.query.search}`
  );
  const books = await response.json();

  if (books.results.length === 0) {
    res.status(404).send();
    return;
  }

  res.status(200).send({ result: books.results });
}
