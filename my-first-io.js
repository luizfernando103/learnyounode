const fs = require('fs')

const str = fs.readFile(process.argv[2]);

let array = str.toString().split("\n")


console.log(array.length-1)