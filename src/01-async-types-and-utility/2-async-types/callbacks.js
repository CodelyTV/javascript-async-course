const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello from a callback!");
});

app.listen(3000, () => {
  console.log(`Application up and running!`);
});
