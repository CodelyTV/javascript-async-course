import { appendFile, copyFile, unlink, writeFile } from "node:fs";

import { getUsersFromApi } from "./getUsersFromApi.js";

const file = "./users.json";

writeFile(file, "", writeFileData);

function writeFileData() {
  getUsersFromApi(saveFileData);
}

function saveFileData(users) {
  appendFile(file, JSON.stringify(users), appendDataInFile);
}

function appendDataInFile() {
  copyFile(file, "../dest.json", deleteFile);
}

function deleteFile() {
  unlink(file, () => {
    console.log("Process finished!");
  });
}
