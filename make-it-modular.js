const filterFn = require('./solucao.js')
const dir = process.argv[2]
const filterStr = process.argv[3]


filterFn(dir, filterStr, function (err, list) {
    if (err) throw err
  
    list.forEach(function (file) {
      console.log(file)
    })
  })