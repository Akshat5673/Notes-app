const express = require("express");
const notes = require("./Data/notes");
const dotenv = require("dotenv");

const app = express();
dotenv.config();

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));

app.get("/api/getnotes", (req, res) => {
  res.send(notes);
});

app.get("/api/getnote/:id", (req, res) => {
  const note = notes.find((n) => n._id === req.params.id);

  res.send(note);
});
