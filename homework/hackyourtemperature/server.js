import express from "express";
import fetch from "node-fetch";
import { keys } from "./sources/keys.js";





const app = express();
const port = 3000;
app.use(express.json());



app.get("/", (req,res) => {
    res.send("hello from backend to frontend!")
});



app.post("/weather", async (req, res) => {
    const { city } = req.body;
  
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${keys.API_KEY}`
      );
      const data = await response.json();
  
      if (data.cod === "404") {
        res.send({ weatherText: "City is not found!" });
      } else {
        const weatherText = `Current temperature in ${city}: ${data.main.temp}°C`;
        res.send({ weatherText });
      }
    } catch (error) {
      console.error(error);
      res.status(500).send({ weatherText: "Error fetching weather data." });
    }
  });





app.listen(port, () => {
    console.log(`listening to port ${port}`)
})

export default app;