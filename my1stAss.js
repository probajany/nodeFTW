var fs = require('fs')
var lines = fs.readFile(process.argv[2], 'utf8', function callback(err, fileContents){
    console.log(fileContents.split('\n').length - 1)
})



    // var fs = require('fs')
    // var file = process.argv[2]
    
    // fs.readFile(file, function (err, contents) {
    //   // fs.readFile(file, 'utf8', callback) can also be used
    //   var lines = contents.toString().split('\n').length - 1
    //   console.log(lines)
    // })