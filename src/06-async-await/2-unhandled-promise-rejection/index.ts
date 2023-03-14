import express from "express";

import { getUsers } from "./getUsers";

const app = express();
const port = 3000;

process.on("unhandledRejection", () => {
	console.error("Unexpected error");
});

app.get("/", (req, res) => {
	res.send("Hello World!");
});

app.get("/users", (req, res) => {
	getUsers()
		.then((users) => {
			res.send(users);
		})
		.catch((e) => {
			console.error(e);
			res.send("There was a problem retrieving users data");
		});
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
