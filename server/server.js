const express = require("express");
const fs = require("fs");
const path = require("path");
require("dotenv").config();

const app = express();
const url = path.join(__dirname, "../client");
app.use(express.static(url));

app.get("/", (req, res) => {
  const file = path.join(__dirname, "../client/popcheck.html");
  res.sendFile(file);
});

app.get("/population", async (req, res) => {
  try {
    const userQuery = req.query.country;
    const API_KEY = process.env.API_KEY;
    const response = await fetch(
      `https://api.api-ninjas.com/v1/population?country=${userQuery}`,
      { headers: { "X-Api-Key": API_KEY } },
    );
    if (!response.ok) {
      return res.status(response.status).send("Request Failed!");
    }
    const data = await response.json();

    return res.send(data);
  } catch (error) {
    return res.status(500).send("Server Error!!");
  }
});

app.get("/flag", async (req, res) => {
  try {
    const Country = req.query.country;
    const userQuery = Country.slice(0, 2).toLowerCase();
    const API_KEY = process.env.API_KEY;
    const response = await fetch(
      `https://api.api-ninjas.com/v1/countryflag?country=${userQuery}`,
      { headers: { "X-Api-Key": API_KEY } },
    );
    if (!response.ok) {
      return res.status(response.status).send("Request Failed!");
    }
    const data = await response.json();
    return res.send(data);
  } catch (error) {
    return res.status(500).send("Server Error!!");
  }
});

const PORT = 3004;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}!!`);
});
