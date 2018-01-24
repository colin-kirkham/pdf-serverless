const fs = require('fs')

module.exports.pdfHandler = function (event, context, callback) {
  const data = fs.readFileSync('test.pdf')
  const body = Buffer.from(data).toString('base64')
  callback(null, {
    isBase64Encoded: true,
    statusCode: 200,
    headers: { 'content-type': 'application/pdf', 'content-length': body.length },
    body
  })
}

module.exports.pngHandler = function (event, context, callback) {
  const data = fs.readFileSync('test.png')
  const body = Buffer.from(data).toString('base64')
  callback(null, {
    isBase64Encoded: true,
    statusCode: 200,
    headers: { 'content-type': 'application/pdf', 'content-length': body.length },
    body
  })
}
