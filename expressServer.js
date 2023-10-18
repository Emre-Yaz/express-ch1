const path = require("path");
const express = require("express");
const app = express();

app.use(express.static("public"));

app.all("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/node.html"));
});

app.all("*", (req, res) => {
  res.send("404!");
});

app.listen(5001);
console.log("Server is running on port 5001");
