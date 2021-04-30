const express = require("express");
const app = express();

// Sets
app.set("port", process.env.PORT || 5500);

module.exports = app;