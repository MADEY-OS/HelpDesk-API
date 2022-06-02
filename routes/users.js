const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

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

//GET: all users.
router.get("/", async (req, res) => {
  const users = await User.find();
  res.send(users).status(200);
});

//GET: single user.
router.get("/:id", async (req, res) => {
  const user = await User.find({ userID: req.params.id });
  if (!user) return res.status(404).send("Nie ma takiego zadania!");
  res.send(user);
});

//POST: single user.
router.post("/", async (req, res) => {
  const date = Date.now();
  let user = new User({
    userID: "N" + date,
    name: req.body.name,
    sName: req.body.sName,
    room: req.body.room,
    role: req.body.role,
    department: req.body.department,
    email: req.body.email,
    phone: req.body.phone,
  });
  user = await user.save();
  res.send(user);
});

//PUT: single task.
router.put("/:id", async (req, res) => {
  const user = await User.findOneAndUpdate(
    { userID: req.params.id },
    {
      name: req.body.name,
      sName: req.body.sName,
      room: req.body.room,
      role: req.body.role,
      department: req.body.department,
      email: req.body.email,
      phone: req.body.phone,
    },
    { new: true }
  );
  if (!user) return res.status(404).send("Zadanie z podanym id nie istnieje.");
  res.send(user);
});

//DELETE: single task.
router.delete("/:id", async (req, res) => {
  const user = await User.findOneAndDelete({ userID: req.params.id });
  if (!user) return res.status(404).send("Zadanie z podanym id nie istnieje.");
  res.send(user);
});

module.exports = router;
