const mongoose = require("mongoose");

//Database Model
const Task = mongoose.model(
  "Task",
  new mongoose.Schema({
    taskID: { type: String, unique: true, default: Date.now },
    userID: { type: String, require: true},
    title: { type: String, required: true, maxlength: 10 },
    desc: { type: String, required: true, maxlength: 200 },
    status: {type: String, default: "Nowe"},
    category: {type: String, default: "Brak"},
    prio: {type: String, default: "Podstawowy"},
    deadline: {type: Date},
    worker: {type: String},
  })
);

module.exports = Task;
