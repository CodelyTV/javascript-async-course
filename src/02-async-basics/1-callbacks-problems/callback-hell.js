import { appendFile, copyFile, unlink, writeFile } from "node:fs";

import { getUsersFromApi } from "./getUsersFromApi.js";

const file = "./users.json";

writeFile(file, "", () => {
  getUsersFromApi((users) => {
    appendFile(file, JSON.stringify(file), () => {
      copyFile(file, "../dest.json", () => {
        unlink(file, () => {
          console.log("Process finished!");
        });
      });
    });
  });
});
