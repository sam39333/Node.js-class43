import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello from backend to frontend!");
});

app.post("/weather", (req, res) => {
  const { city } = req.body;
  res.send(city);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
