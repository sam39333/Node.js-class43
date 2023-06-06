require = require("esm")(module);
module.exports = require("./app.test");


const request = require('supertest');
const app = require('../server');

test("GET / should return 'hello from backend to frontend!'", async () => {
  const response = await request(app).get("/");
  expect(response.status).toBe(200);
  expect(response.text).toBe("hello from backend to frontend!");
});

  


