import {
  debounceTime,
  distinctUntilChanged,
  filter,
  fromEvent,
  map,
  switchMap,
  tap,
} from "rxjs";
import { fromFetch } from "rxjs/fetch";

const input = document.getElementById("search");
const books = document.getElementById("books");

const bookRequest = (search) => {
  return fromFetch(`https://gutendex.com/books?search=${search}`).pipe(
    switchMap((r) => r.json())
  );
};

fromEvent(input, "keyup")
  .pipe(
    debounceTime(500),
    map((e) => e.target.value),
    filter((e) => !!e),
    tap(console.log),
    distinctUntilChanged(),
    switchMap(bookRequest),
    map((resp) => resp.results.map((book) => book.title)),
    tap((titles) => {
      books.innerHTML = "";
      titles.forEach((title) => {
        books.innerHTML += `<li>${title}</li>`;
      });
    })
  )
  .subscribe();
