const express = require("express");

const app = express();

app.post("/endpoint", function (req, res) {
  res.status(200).json({ success: true });
});

module.exports = app;
