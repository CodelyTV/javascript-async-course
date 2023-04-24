import { appendFile, copyFile, unlink, writeFile } from "node:fs/promises";
import * as path from "path";

import { getUsersFromApi } from "./getUsersFromApi.js";

const file = path.resolve("./users.json");
const dest = process.argv[2] || "../dest.json";

writeFile(file, "")
	.then(getUsersFromApi)
	.then((users) => {
		return appendFile(file, JSON.stringify(users));
	})
	.then(() => {
		return copyFile(file, dest);
	})
	.then(() => console.log("Process finished successfully! 🎉"))
	// Finally will be executed always
	.finally(() => unlink(file))
	// Catch only executes when there is an error
	.catch(() => {
		console.error("Error in file processing 😢");
	});
