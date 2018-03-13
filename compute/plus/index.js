const express = require("express")
const request = require("request-promise")
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(bodyParser.json());

app.post("/plus", async (req, res, next) => {
  try {
    const result = req.body.factorOne + req.body.factorTwo
    res.json(result)
  } catch (error) {
    next(error)
  }
})

const port = process.env.PORT || 8080

app.listen(port, () => {
  console.log(`plus service running on ${port}`)
})