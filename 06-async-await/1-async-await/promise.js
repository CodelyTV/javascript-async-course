export function searchBooksGetController(req, res) {
  return fetch(`https://gutendx.com/books?s=${req.query.search}`)
    .then(response => response.json())
    .then(books => {
      if (books.results.length === 0) {
        res.status(404).send();
        return;
      }
    
      res.status(200).send({ result: books.results });
    }) 
}