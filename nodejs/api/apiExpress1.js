var exp = require('express');
var app = exp();
app.use(exp.json());
var userApi = require("./ApiModules/User");
app.use("/user",userApi);//middleware method

app.listen(8080,()=>{
console.log("Server started..!!!");    
})
//testing.thisissimpleangularapp