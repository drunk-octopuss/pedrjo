const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/api/text", require("./routes/userRoutes"));

app.listen(PORT, () => {
  console.log(`API server is running ${PORT}`);
});
