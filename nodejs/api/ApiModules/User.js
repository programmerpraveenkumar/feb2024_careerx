var exp = require('express');
var router = exp.Router();
var {MongoClient} = require('mongodb');

const MONGODB_URL = 'mongodb://localhost:27017';
const DATABASE_NAME = 'school';
const client = new MongoClient(MONGODB_URL);
//localhost:8080/user/getStudents
router.get("/getStudents",async (req,res)=>{
    //connect mongodb
    await client.connect();

    //select the databse from mongodb server
    let db = client.db(DATABASE_NAME);

    //reading the data from the collection and convert into the array
    let dbResult = await db.collection("students").find({}).toArray();
    console.log(dbResult);
    res.status(200).json(dbResult)
})
//localhost:8080/user/getStudentsbyEmail?email=sdfsdf@gmail.com
router.get("/getStudentsbyEmail",async (req,res)=>{
    let {email} = req.query;
     console.log(email);
    //connect mongodb
    await client.connect();

    //select the databse from mongodb server
    let db = client.db(DATABASE_NAME);

    //reading the data from the collection and convert into the array
    let dbResult = await db.collection("students").find({"email":email}).toArray();
    console.log(dbResult);
    res.status(200).json(dbResult);
})

router.post("/createStudent",async (req,res)=>{
    let {email,name,address} = req.body;
    let data = {
        "email":email,
        "name":name,
        "address":address,
    }
    //connect mongodb
    await client.connect();

    //select the databse from mongodb server
    let db = client.db(DATABASE_NAME);

    //insert nly one the data from into the collection
    await db.collection("students").insertOne(data)
    res.status(200).json({"message":"student created!!"})
})

router.post("/createMultipleStudents",async (req,res)=>{
    let data = [];
    req.body.forEach(element => {
        let {email,name,address} = element;   
        data.push(  {
            "email":email,
            "name":name,
            "address":address,
        });
    });
   
    //connect mongodb
    await client.connect();

    //select the databse from mongodb server
    let db = client.db(DATABASE_NAME);

    //insert multiple data  into the collection
    await db.collection("students").insertMany(data)
    res.status(200).json({"message":"student created!!"})
})

//localhost:8080/user/deleteStudent
router.delete("/deleteStudent",async (req,res)=>{
    let {email} = req.body;
    let data = {
        "email":email,       
    }
    //connect mongodb
    await client.connect();

    //select the databse from mongodb server
    let db = client.db(DATABASE_NAME);

    //delete nly one record by email.
    await db.collection("students").deleteOne(data);
    res.status(200).json({"message":"student deleted!!"})
})

router.put("/updateStudentPassword",async (req,res)=>{
    let {email,password} = req.body;

    let data = {
        $set:{ "password":password}
    }
    let filter = {
        "email":email
    }
    //connect mongodb
    await client.connect();

    //select the databse from mongodb server
    let db = client.db(DATABASE_NAME);

    //delete nly one record by email.
    await db.collection("students").updateOne(filter,data);
    res.status(200).json({"message":"student update!!"})
})

var details = {
	"person1":{
		"name":"test",age:'80','address':"Ddwdqdqed"
	},
	"person2":{
		"name":"test2",age:'110','address':"fhhfgn"
	},
	"person3":{
		"name":"test3",age:'700','address':"Ddwdhnfgq5674gdqed"
	}
}
//localhost:8080/user/user--> get
router.get("/user",(req,res)=>{
    let {name} = req.query;//from the url
    let personDetail = details[name];
    res.status(200).json(personDetail);
    
    // console.log(req.query);
    // let {name,mobile} = req.query;
    // res.end(`Your name is ${name}. Mobile no is ${mobile}`);
})

//localhost:8080/user/user--> post method
//requestbody
router.post("/user",(req,res)=>{
    let {email,password} = req.body;
    res.end(`Email is ${email}.Password is ${password}`);
})

//localhost:8080/user/login
router.post("/login",(req,res)=>{
    let {email,password} = req.body;
    if(email == 'admin@gmail.com' && password == 'admin'){
        //it should be json response.
        res.status(200).json({"message":"login successful"})
    }else{
        res.status(400).json({"message":"login failure"})
    }
})
//http://localhost:8080/user/getStudents
router.get("/getStudents",async (req,res)=>{
    //connect mongodb
    await client.connect();

    //select the databse from mongodb server
    let db = client.db(DATABASE_NAME);

    //reading the data from the collection and convert into the array
    let dbResult = await db.collection("students").find({}).toArray();


    console.log(dbResult);
    res.status(400).json({"message":"connected!!"})
})

//to acess api outside of the file.
module.exports = router;