const express = require("express");
const serverConfigs = require("./configs/server.config");
const app = express();
const mongoose = require("mongoose");
const dbConfig = require("./configs/db.config");

/*
Logic to connect to MongoDB and create an ADMIN user
Need to have the mongodb up and running in ypur local machine
*/
mongoose.connect(dbConfig.DB_URL);
const db = mongoose.connection;

db.on("error", () => {
  console.log("Error while connecting to DB");
});

db.once("open", () => {
  console.log("Database is connected");
});

app.listen(serverConfigs.PORT, () => {
  console.log(`server started at port ${serverConfigs.PORT}`);
});
