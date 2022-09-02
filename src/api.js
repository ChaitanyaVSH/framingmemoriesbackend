const express = require("express");
const serverless = require("serverless-http");
const routes = require("./routes")

const app = express();

app.use(`/.netlify/functions/api`, routes);

module.exports = app;
module.exports.handler = serverless(app);