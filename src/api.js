const express = require("express");

const cors = require("cors");
const serverless = require("serverless-http");
const routes = require("./routes")

const app = express();


/**
 * https://www.npmjs.com/package/cors
 * Enable CORS for the frontend domain to call the APIs hosted on this server
 */
const corsOptions = {
    origin: "https://framingmemories.netlify.app/",
    optionsSuccessStatus: 200
}
app.use(cors(corsOptions))

app.use(`/.netlify/functions/api`, routes);

module.exports = app;
module.exports.handler = serverless(app);
