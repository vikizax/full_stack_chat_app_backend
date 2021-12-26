const express = require("express");

const app = express();

// middleware

// routes

app.get("/", (req, res) => {
  res.status(200).json({ message: "OK" });
});

module.exports = app;
