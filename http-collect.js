const http = require('http')
const bl = require('bl')
let arg = process.argv[2];

http.get(arg, function (response) {
  response.pipe(bl(function (err, data) {
    if (err) throw err
    data = data.toString()
    console.log(data.length)
    console.log(data)
  }))
})