const router = require("express").Router()
const fs = require("fs")
const util = require("util")
const readFromFile = util.promisify(fs.readFile)

router.get("/notes", function (req, res) {
  readFromFile("db/db.json").then(function (notes) {
    let parseNotes = JSON.parse(notes)
    res.json(parseNotes)
  })
})

module.exports = router
