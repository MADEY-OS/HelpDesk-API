const mongoose = require("mongoose");

//Database Model
const User = mongoose.model(
    "User",
    new mongoose.Schema({
      userID: {type: String},
      name: {type: String, required: true, maxlength: 50},
      sName: {type: String, required: true, maxlength: 50},
      room: {type: String},
      role: {type: String},
      department: {type: String},
      email: {type: String},
      phone: {type: String},
    })
  );
  
  module.exports = User;