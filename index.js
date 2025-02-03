const express = require("express");
require("dotenv").config();

const app = express();

app.get("/", (req, res) => {
    res.send("Hello world");
});

// Export the app as a serverless function
module.exports = app;