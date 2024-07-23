const express = require("express");
const app = express();
const port = 8081;
const cors = require("cors");

app.use(
  cors({
    origin: "http://127.0.0.1:5501",
  })
);

app.get("/health", (req, res) => {
  res.status(200).send({ status: "OK" });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`, "http://localhost:8081/health");
});
