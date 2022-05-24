const express = require("express");
const router = express.Router();
const User = require("../Models/User.js");

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
  try {
    const result = await user.save();
    res.send(result);
  } catch (ex) {
    console.log(ex);
  }
});

//PUT: single user.
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

//DELETE: single user.
router.delete("/:id", async (req, res) => {
  const user = await User.findOneAndDelete({ userID: req.params.id });
  if (!user) return res.status(404).send("Zadanie z podanym id nie istnieje.");
  res.send(user);
});

module.exports = router;
