var fs = require('fs')
var x = process.argv[2];
var str = fs.readFileSync(x).toString();
var sst = str.toString();
console.log(sst.split('\n').length - 1);