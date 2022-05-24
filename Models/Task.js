const mongoose = require('mongoose');

//Database Model
const Task = mongoose.model(
    "Task",
    new mongoose.Schema({
      taskID: String,
      title: String,
      desc: String,
      status: String,
      category: String,
      prio: String,
      deadline: String,
      worker: String,
    })
  );

  module.exports = Task;