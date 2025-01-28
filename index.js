const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const app = express();
const { getRouter, postRouter, defaultRoute } = require("./controllers.js");
const { model } = require("./model.js");
dotenv.config();
const { mongourl } = process.env;
console.log(mongourl);
app.use(express.json());

mongoose
  .connect(mongourl)
  .then(() => {
    console.log("connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.get("/li", defaultRoute);
app.get("/", getRouter(model));
app.post("/", postRouter(model));

const port = 3000;
app.listen(port, () => {
  console.log("localhost:3000");
});
