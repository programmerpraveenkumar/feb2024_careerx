var exp = require('express');
var app = exp();
app.use(exp.json())

//localhost:8080/user?country=india&city=chennai
app.get("/user",(req,res)=>{
    let {country,city} = req.query;
    res.end(`im in ${city} and my country is ${country}`);
})

app.post("/user",(req,res)=>{
    let {country,city} = req.query;
    res.end(`im in ${city} and my country is ${country}`);
})

app.post("/login",(req,res)=>{
    let {email,password} = req.body;
    if(email == 'admin@gmail.com' && password == 'admin'){
        //it should be json response.
        res.status(200).json({"message":"login successful"})
    }else{
        res.status(400).json({"message":"login failure"})
    }
})

app.listen(8080,()=>{
console.log("Server started..!!!");    
})
//testing.thisissimpleangularapp