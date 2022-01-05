// @ts-nocheck
require("dotenv").config();
const express = require("express");
const fs = require("fs");
const app = express();
const exdb = JSON.parse(fs.readFileSync("db/database_example.json", "utf8"));

app.get("/", (req, res) => {
  console.log("Getting... " + req.query.data);
  if (!exdb[req.query.data]) {
    return res.send("Bu veri API'da bulunmuyor.");
  } else {
    return res.send(exdb[req.query.data]);
  }
}); 

app.post("/", (req, res) => {
  return res.send("Received a POST HTTP method");
});

app.put("/", (req, res) => {
  return res.send("Received a PUT HTTP method");
});

app.delete("/", (req, res) => {
  return res.send("Received a DELETE HTTP method");
});

app.listen(process.env.PORT, () =>
  console.log(`Example app listening on port ${process.env.PORT}!`),
);
