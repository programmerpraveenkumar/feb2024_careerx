login & register

school:
students

Step1:
create teachers collection into the school database


//Teachers.js

var exp = require('express');
var router = exp.Router();
var {MongoClient} = require('mongodb');

const MONGODB_URL = 'mongodb://localhost:27017';
const DATABASE_NAME = 'school';
const client = new MongoClient(MONGODB_URL);

router.post("/teacherLogin",(req,res)=>{

});

router.post("/createTeacher",async(req,res)=>{
	let body = req.body;
	let data = {
		'name': body['name'],
		'email': body['email'],
		'password': body['password'],
		'address': body['address'],
		'mobile_no': body['mobile_no'],
	}


try{
    if(body['name'] == undefined || body['name'] == ''){
        throw "Name should not be empty!!";
    }
    else if(body['password'] == ''){
            throw "Password should not be empty!!";
    }else{
        await client.connect();
        //select the databse from mongodb server
        let db = client.db(DATABASE_NAME);
        let existResult =  await db.collection("teachers").find({"email":body['email']}).toArray()
        if(existResult.length > 0){
            res.status(400).json({"message":"Email is exist "})	
        }else{
            //insert nly one the data from into the collection
            await db.collection("teachers").insertOne(data);
            res.status(200).json({"message":"teacher created!!"})
        }
    }
}catch(e){
    res.status(400).json({"message":e})
}
});

module.exports = router;



