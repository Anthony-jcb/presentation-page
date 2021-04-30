const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hola wenas noches");
});

module.exports = router;