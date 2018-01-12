const express = require('express')
const serverless = require('serverless-http')
const fs = require('fs')
const app = express()

app.get('/static-pdf', (req, res) => {
  let data = fs.readFileSync('test.pdf')
  res.contentType('application/pdf')
  res.send(data)
})

module.exports.handler = serverless(app, {
  binary: ['application/pdf']
})

// module.exports.handler = serverless(app)

// app.listen(3000)
