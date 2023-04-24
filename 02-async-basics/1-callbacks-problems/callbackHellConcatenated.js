import { appendFile, copyFile, unlink, writeFile } from "node:fs";

import { getUsersFromApiCurrified as getUsersFromApi } from "./getUsersFromApi.js";

const file = "./users.json";

writeFile(
	file,
	"",
	getUsersFromApi(appendFileData(copyFileToDestination(removeFile(logProcessFinished))))
);

function appendFileData(callback) {
	return function (users) {
		appendFile(file, JSON.stringify(users), callback);
	};
}

function copyFileToDestination(callback) {
	return function () {
		copyFile(file, "../dest.json", callback);
	};
}

function removeFile(callback) {
	return function () {
		unlink(file, callback);
	};
}

function logProcessFinished() {
	console.log("Process finished!");
}
