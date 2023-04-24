import { writeFile } from "node:fs";
import { appendFile, copyFile, unlink } from "node:fs/promises";
import * as path from "path";

import { getUsersFromApi } from "./getUsersFromApi.js";

const file = path.resolve("./users.json");

await writeFilePromisified(file, "");
const users = await getUsersFromApi();
await appendFile(file, JSON.stringify(users));
await copyFile(file, "../dest.json");
await unlink(file);
console.log("Process finished!");

function writeFilePromisified(path, data) {
	return new Promise((resolve) => {
		writeFile(path, data, () => {
			resolve();
		});
	});
}
