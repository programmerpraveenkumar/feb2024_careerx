var exp = require('express');
var app = exp();
var userApi = require("./ApiModules/User");
var cors = require("cors");

app.use(cors());//accept cross origin requests
app.use(exp.json());//for accesssing the requestbody

app.use((req,res)=>{
    console.log("sample middleware",req.url);
    /*
    below line will move the reuest to next method.
    if it is not exist.request will be stopped here and will not throw any error.
    */
    req.next();
})
//all http requests will go via middleware and it reaches the api.
app.use("/user",userApi);//middleware method
app.listen(8080,()=>{
console.log("Server started..!!!");    
})