const express = require("express");

const cors = require("cors");
const serverless = require("serverless-http");
const routes = require("./routes")

const app = express();

// Enable CORS for the frontend domain to call the APIs hosted on this server
app.use(cors())

app.use(`/.netlify/functions/api`, routes);

module.exports = app;
module.exports.handler = serverless(app);
