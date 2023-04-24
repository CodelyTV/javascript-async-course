import { writeFile } from "node:fs";
import { appendFile, copyFile, unlink } from "node:fs/promises";
import * as path from "path";

import { getUsersFromApi } from "./getUsersFromApi.js";

const file = path.resolve("./users.json");

writeFilePromisified(file, "")
	.then(getUsersFromApi)
	.then((users) => {
		return appendFile(file, JSON.stringify(users));
	})
	.then(() => {
		return copyFile(file, "../dest.json");
	})
	.then(() => {
		return unlink(file);
	})
	.then(() => console.log("Process finished!"));

function writeFilePromisified(path, data) {
	return new Promise((resolve) => {
		writeFile(path, data, () => {
			resolve();
		});
	});
}
