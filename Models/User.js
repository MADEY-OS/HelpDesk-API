const mongoose = require("mongoose");

//Database Model
const User = mongoose.model(
    "User",
    new mongoose.Schema({
      userID: String,
      name: String,
      sName: String,
      room: String,
      role: String,
      department: String,
      email: String,
      phone: String,
    })
  );
  
  module.exports = User;