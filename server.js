const express = require("express");
const serverConfigs = require("./configs/server.config");
const app = express();
const mongoose = require("mongoose");
const dbConfig = require("./configs/db.config");
const userModel = require("./models/user.model");

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
  init();
});

async function init() {
  /*
  Initialize the mongodb
  Need to create the ADMIN user
  Check if the admin user already present
  */
  const admin = await userModel.findOne({
    userId: "admin",
  });

  if (admin) {
    console.log("admin user already present");
    return;
  }

  admin = await userModel.create({
    name: "Pilli Rajesh",
    userId: "admin",
    email: "pillirajesh@ymail.com",
    userType: "ADMIN",
    password: "Welcome",
  });
  console.log(admin);
}

app.listen(serverConfigs.PORT, () => {
  console.log(`server started at port ${serverConfigs.PORT}`);
});
