const router = require("express").Router();
const fs = require("fs");
const { Module } = require("module");
const path = require("path");
const { v4: uuidv4 } = require("uuid");

console.log("PID: ", process.pid);

router.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "/../db/db.json"));
});

router.post("/notes", (req, res) => {
  try {
    const currentSaves =
      fs.readFileSync(path.join(__dirname, "/../db/db.json"), "utf8") || "[]";

    const formattedCurrentSaves = JSON.parse(currentSaves);

    // TODO: Delete from the db.json file
    // .filter(note => note.id !== req.body.id);
    const newNote = [
      ...formattedCurrentSaves,
      { id: uuidv4(), title: req.body.title, text: req.body.text },
    ];

    fs.writeFileSync(
      path.join(__dirname, "/../db/db.json"),
      JSON.stringify(newNote)
    );

    console.log(req.body);
    res.json(true);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.delete("/notes/:id", (req, res) => {
  try {
    // TODO: Retrieve the id
    const noteId = req.query.id;
    const currentSaves =
      fs.readFileSync(path.join(__dirname, "/../db/db.json"), "utf8") || "[]";

    const formattedCurrentSaves = JSON.parse(currentSaves);

    const newNote = formattedCurrentSaves.filter((note) => note.id !== noteId);

    fs.writeFileSync(
      path.join(__dirname, "/../db/db.json"),
      JSON.stringify(newNote)
    );

    console.log(req.body);
    res.json(true);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
