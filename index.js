const express = require("express");
const mongoose = require("mongoose");

const port = process.env.PORT || 3000;
const con = "mongodb://localhost/HelpDesk";

const tasks = require("./routes/tasks");
const users = require("./routes/users");
//const devices = require("./routes/devices");

const app = express();

mongoose
  .connect(con)
  .then(() => console.log("Udało się połączyć z bazą danych"))
  .catch(() => console.error("Nie udało się połączyć z bazą danych"));

app.use(express.json());
app.use("/tasks", tasks);
app.use("/users", users);

app.listen(port, () => {
  console.log(`Nasłuchiwanie na porcie: ${port}`);
});
