const express = require('express')
const app = express()
const port = 15773

app.get('/', (req, res) =>
  res.send('Greetings from ladyusa...')
)

app.listen(port, () =>
  console.log(`App running on port ${port}.`)
)
