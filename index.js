require("dotenv").config();
const express = require("express");
const xss = require("xss-clean");
const config = require("./config");
const cron = require("node-cron");
const apiRoutes = require("./routes");
const { EVERY_HOUR } = require("./cron/scheduleConstants");
const { addStationToDb } = require("./functions/station");
const swaggerUi = require("swagger-ui-express"),
  swaggerDocument = require("./swagger.json");

//intialize app
const app = express();

const port = config.env.port;

config.dbAccess.dbConnect();

cron.schedule("*/10 * * * *", function () {
  console.log("running a task every ten minutes");
  addStationToDb();
});

app.use(xss());

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: false }));

app.use("/", apiRoutes);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(port, () => {
  console.log(`Stutern Test is listening at http://localhost:${port}`);
});
