const mongoose = require("mongoose");

/* 
It will hold the schema for the user
It explains the different fields(columns) of use are how it will be stored in the mongodb
*/

const userSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
      unique: true,
    },

    name: {
      type: String,
      required: true,
    },

    password: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      minLength: 10,
      lowercase: true,
    },

    userType: {
      type: String,
      required: true,
      default: "CUSTOMER",
      enum: ["CUSTOMER", "ADMIN"],
    },
  },

  /* 
timestamp is used here to add two fileds(columns) automatically 
those are one is created time and other one is updated time.
*/
  { timestamps: true }
);

/**  
 below line defines the collection(table) name where it will be stored
 here below User is collection(like table name in RDBMS[MySql])
 **/

module.exports = mongoose.model("User", userSchema);
