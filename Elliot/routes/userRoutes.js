const express = require("express");
const router = express.Router();

//const controller = require("../controller/userController");
var text = [
  {
    id: "1",
    text: "hello!",
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
  var name = req.body.name;

  if (name) {
    var index = text.findIndex((el) => el.id == id);

    text[index] = {
      ...text[index],
      name: name,
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
