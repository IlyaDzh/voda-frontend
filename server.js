const { config } = require("dotenv");
config();

const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "build")));

app.get("/*", (request, response) => {
    response.sendFile(path.join(__dirname, "build", "index.html"));
});

console.log("Starting express app");

const port = 3010;

app.listen(port);

console.log(`Express app is listening on port ${port}`);
