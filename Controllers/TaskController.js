const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const Task = require("../Models/Task.js");

//GET: all tasks.
router.get("/", async (req, res) => {
  const tasks = await Task.find();
  res.send(tasks).status(200);
});

//GET: single task.
router.get("/:id", async (req, res) => {
  const task = await Task.find({ taskID: req.params.id });
  if (!task) return res.status(404).send("Nie ma takiego zadania!");
  res.send(task);
});

//POST: single task.
router.post("/", async (req, res) => {
  const date = Date.now();
  let task = new Task({
    taskID: date,
    title: req.body.title,
    desc: req.body.desc,
    status: req.body.status,
    category: req.body.category,
    prio: req.body.prio,
    deadline: req.body.deadline,
    worker: req.body.worker,
  });
  task = await task.save();
  res.send(task);
});

//PUT: single task.
router.put("/:id", async (req, res) => {
  const task = await Task.findOneAndUpdate(
    { taskID: req.params.id },
    {
      title: req.body.title,
      desc: req.body.desc,
      status: req.body.status,
      category: req.body.category,
      prio: req.body.prio,
      deadline: req.body.deadline,
      worker: req.body.worker,
    },
    { new: true }
  );
  if (!task) return res.status(404).send("Zadanie z podanym id nie istnieje.");
  res.send(task);
});

//DELETE: single task.
router.delete("/:id", async (req, res) => {
  const task = await Task.findOneAndDelete({ taskID: req.params.id });
  if (!task) return res.status(404).send("Zadanie z podanym id nie istnieje.");
  res.send(task);
});

module.exports = router;
