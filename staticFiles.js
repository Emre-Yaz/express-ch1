const express = require("express");
const app = express();

app.use(express.static("public"));

app.listen(5002);
console.log("Server is running on port 5002");
