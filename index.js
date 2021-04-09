const express = require('express')
const bodyParser = require('body-parser')
require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 5000

// parse application/json
app.use(bodyParser.json())

app.get('*', (req, res) => {
  res.send("Hello World!")
})

app.listen(PORT, () => {
  console.log(`Test app listening on port ${PORT}`)
})

