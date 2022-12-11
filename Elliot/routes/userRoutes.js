const express = require("express");
const router = express.Router();

//const controller = require("../controller/userController");
var text = [
  {
    id: "1",
    filling: "hello!",
  },
];
router.get("/contact", (req, res) => {
  res.status(200).json({
    success: true,
    message: "data fetched successfully",
    data: text,
  });
});
router.post("/contact", (req, res) => {
  var filling = req.body.filling;
  if (text) {
    text.push({
      id: (text.length + 1).toString(),
      filling: filling,
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
router.delete("/contact/:id", (req, res) => {
  var id = req.params.id;
  var newText = text.filter((el) => el.id != id);
  text = newText;

  res.send({
    success: true,
    message: "text deleted successfully",
  });
});
router.put("/contact/:id", (req, res) => {
  var id = req.params.id;
  var filling = req.body.filling;

  if (filling) {
    var index = text.findIndex((el) => el.id == id);

    text[index] = {
      ...text[index],
      filling: filling,
    };
    res.send({
      success: true,
      message: "data updated successfully",
    });
  } else {
    res.send({
      success: false,
      message: "validation error",
    });
  }
});
module.exports = router;
