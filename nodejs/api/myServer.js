//http server
var http = require('http');//importing http library

http.createServer((req,res)=>{
     console.log(req.url);
     console.log(req.method);
     res.writeHead(200,{'content-type':'text/html'})
     if(req.method == "POST" && req.url == '/login'){
        res.end("this is login response for post method");
     }else if(req.method == "GET" && req.url == '/user'){
        res.end("this is user response for get method");
     }   
}).listen(8080)


/*
getUser->get
login()->post
*/