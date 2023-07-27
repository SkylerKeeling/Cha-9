const express = require("express")
const HTMLRoutes = require("./HTMLRoutes/HTMLRoutes.js")
const APIRoutes = require("./APIRoutes/APIRoutes.js")
const app = express()
const port = process.env.port || 3001
//route middleware
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static("public"))

app.use("/", HTMLRoutes)
app.use("/api", APIRoutes)
app.listen(port, function () {
  console.log(`app listening at http://localhost:${port}`)
})
