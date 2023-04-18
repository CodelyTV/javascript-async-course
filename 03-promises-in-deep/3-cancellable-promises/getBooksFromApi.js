export function getBooksFromApi(search) {
  return new Promise((resolve, reject) => {
    fetch(`https://gutendex.com/books?search=${search}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.count === 0) {
          reject();
        }
        resolve(data.results);
      });
  });
}
