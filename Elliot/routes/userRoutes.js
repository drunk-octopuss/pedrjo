const express = require("express");
const router = express.Router();

//const controller = require("../controller/userController");

router.get("/", (req, res) => {
  res.status(200).json({ message: "hello elliot" });
});

module.exports = router;
