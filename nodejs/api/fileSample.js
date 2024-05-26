// reading the file nd writing the file.
var fs = require('fs')

fs.appendFile('sample.txt','hi how ar yu',(err)=>{
    if(err)throw error;
})

//node filename