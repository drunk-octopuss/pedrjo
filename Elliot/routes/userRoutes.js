const express = require("express");
const router = express.Router();

//const controller = require("../controller/userController");
var text = [
  {
    id: "1",
    text: "hello!",
    font: "Futura",
  },
];
router.get("/contact", (req, res) => {
  res.status(200).json({
    success: true,
    message: "data fatched successfully",
    data: text,
  });
});
router.post("/contact", (req, res) => {
  var text = req.body.text;
  if (text) {
    text.push({
      id: (text.length + 1).toString(),
      text: text,
    });
    res.send({
      success: true,
      message: "data added successfully",
    });
  } else {
    res.send({
      success: false,
      message: "validation error",
    });
  }
});

module.exports = router;
