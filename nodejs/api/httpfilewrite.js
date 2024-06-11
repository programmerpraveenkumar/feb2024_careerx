//http server
var http = require('http');//importing http library
var fs = require('fs')


http.createServer((req,res)=>{    
     fs.writeFile('sample.txt',req.url,(err)=>{
        if(err)throw error;
        //if sucessfull file creation.
        res.writeHead(200,{'content-type':'text/html'})
        res.end(  'sucessfull file er');
    })
     
}).listen(8080)
