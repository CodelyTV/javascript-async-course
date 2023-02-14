function searchBooks() {
  const controller = new AbortController();

  const query = (search) =>
    fetch(`https://gutendex.com/books?search=${search}`, { signal: controller.signal }).then(
      (response) => response.json()
    );

  return {
    controller,
    query,
  };
}

const { query, controller } = searchBooks();

const input = document.getElementById("search");
const books = document.getElementById("books");

let ctr;

input.addEventListener("input", (event) => {
  if (ctr) {
    console.log("abort", event.target.value);
    ctr.abort();
  }

  const { query, controller } = searchBooks();
  ctr = controller;

  query(event.target.value)
    .then((response) => {
      books.innerHTML = "";
      response.results.forEach((book) => {
        books.innerHTML += `<li>${book.title}</li>`;
      });
    })
    .catch(() => {
      console.log("fetch cancelado");
    });
});
