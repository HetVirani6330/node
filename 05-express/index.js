const express = require("express")
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get  ('/move', (req, res) => {
    res.send('Hello World is Move')
})

app.put('/', (req, res) => {
    res.send('Hello World is Move')
})

app.listen(port, () => {
    console.log(`Example app listening on port  http://localhost:${port}`)
  })      