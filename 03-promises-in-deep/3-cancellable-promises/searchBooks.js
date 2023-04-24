import { appendFile, unlink, writeFile } from "node:fs/promises";
import * as path from "path";

import { getBooksFromApi } from "./getBooksFromApi.js";

const file = path.resolve("./books.json");
const search = process.argv[2] || "";

writeFile(file, "")
	.then(() => getBooksFromApi(search))
	.then((users) => {
		return appendFile(file, JSON.stringify(users));
	})
	.then(() => console.log("Process finished successfully! 🎉"))
	.catch(() => {
		unlink(file);
		console.error("No books found with the search term 😢");
	});
