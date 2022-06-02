const mongoose = require("mongoose");

//Database Model
const User = mongoose.model(
    "User",
    new mongoose.Schema({
      userID: {type: String},
      password: {type: String},
      name: {type: String, required: true, maxlength: 50},
      lastName: {type: String, required: true, maxlength: 50},
      room: {type: String},
      role: {type: String},
      department: {type: String},
      email: {type: String, unique: true},
      phone: {type: String},
    })
  );
  
  module.exports = User;