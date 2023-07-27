const router = require("express").Router()
const fs = require("fs")
const util = require("util")
const readFromFile = util.promisify(fs.readFile)
let parseNotes = require("../db/db.json")

router.get("/notes", function (req, res) {
  res.json(parseNotes)
})

router.post("/notes", function (req, res) {
  let noteBody = {
    title: req.body.title,
    text: req.body.text,
    id: Math.random(),
  }
  parseNotes.push(noteBody)
  fs.writeFileSync("./db/db.json", JSON.stringify(parseNotes))
  res.json(parseNotes)
})

router.delete("/notes/:id", function (req, res) {
  let newArray = []
  for (var i = 0; i < parseNotes.length; i++) {
    if (parseNotes[i].id != req.params.id) {
      newArray.push(parseNotes[i])
    }
  }
  parseNotes = newArray
  fs.writeFileSync("./db/db.json", JSON.stringify(parseNotes))
  res.json(parseNotes)
})

module.exports = router
