require = require('esm')(module);
module.exports = require('./app.test.js');

const request = require('supertest');
const app = require('../server.js');


test("GET / should return 'hello from backend to frontend!'", async () => {
  const response = await request(app).get("/");
  expect(response.status).toBe(200);
  expect(response.text).toBe("hello from backend to frontend!");
});

test("POST /weather should respond with 'City is not found!' if the city is unknown", async () => {
  const response = await request(app)
    .post("/weather")
    .send({ city: "unknownCity" });

  expect(response.status).toBe(200);
  expect(response.body.weatherText).toBe("City is not found!");
});

test("POST /weather should respond with a temperature if the city is known", async () => {
  const response = await request(app)
    .post("/weather")
    .send({ city: "Amsterdam" });

  expect(response.status).toBe(200);
  expect(response.body.weatherText).toMatch(/Current temperature in Amsterdam: \d+°C/);
});


  


