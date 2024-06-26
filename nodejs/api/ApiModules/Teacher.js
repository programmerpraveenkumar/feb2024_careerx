//Teachers.js

var exp = require('express');
var router = exp.Router();
const path = require("path");
var {MongoClient} = require('mongodb');
const multer  = require('multer');
var jwt = require('jsonwebtoken');

let multerConfig = multer.diskStorage(
    {
        destination:function(req,file,cb){
                cb(null,"uploads/");
        },
        filename:function(req,file,cb){
            // console.log(file);
            cb(null,file.originalname);
        }
    }
)
// let upload = multer({"dest":"uploads/"});
let upload = multer({"storage":multerConfig});

// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, '/tmp/my-uploads')
//     },
//     filename: function (req, file, cb) {
//       const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
//       cb(null, file.fieldname + '-' + uniqueSuffix)
//     }
//   })
  
//   const upload = multer({ storage: storage })


const MONGODB_URL = 'mongodb://localhost:27017';
const DATABASE_NAME = 'school';
const client = new MongoClient(MONGODB_URL);

const teacherAuthentication=async (req,res,next)=>{
    //headers
    let {token,email} = req.headers;
    // console.log("token is ",token);
    if(token == undefined || token == ''){
        res.status(403).json({"message":"dont have permission to access api"})
    }else{
        try{
            let db = client.db(DATABASE_NAME);
             //verify the token
            jwt.verify(token,'secret');
            let existResult =  await db.collection("teachers").find({"email":email}).toArray();
            if(existResult.length>0 && existResult[0]['token'] == token){
                next();
            }else{
                res.status(403).json({"message":"token mismatch"});
            }
            //can go to next step.
            
        }catch(e){
            res.status(403).json({"message":e})
        }
       
    }    
}

//http://localhost:8080/teacher/teacherLogin
router.post("/teacherLogin",async (req,res)=>{
    let body = req.body;	
    let db = client.db(DATABASE_NAME);
    let existResult =  await db.collection("teachers").find({
                                        "email":body['email'],
                                        "password":body['password']}).toArray();

app.post("/login",async (req,res)=>{
	await client.connect();
	 
    //select the databse from mongodb server
    let db = client.db(DATABASE_NAME);

    //fetch the user by the email.
    let dbResult = await db.collection("teachers").find({"email":email}).toArray();
	if(dbResult.length >0){
			if(dbResult[0]['password'] == req['body']['password']){
                let token = jwt.sign({"id":existResult[0]['_id'],"email":existResult[0].email},'secret',{ expiresIn: '1h' });
    
                await db.collection("teachers").updateOne({"email":body['email']},{$set:{ "token":token}});
				res.status(200).json({"message":"u r crct!!!"})				
			}else{
			let login_attempt  = 1;
			// if db has login_attempt
			if(!isNaN(dbResult[0]['login_attempt'])){	
				login_attempt  = dbResult[0]['login_attempt']+1;
			}
			
		await db.collection("teachers").updateOne({"email":email},{$set:{ "login_attempt": login_attempt}});
		res.status(400).json({"message":"Password is wrong!!!"});	
	
		}
	}else{
        res.status(400).json({"message":"pls provide proper details"})	
	}
})
});

router.post('/file_upload',upload.single('img'),(req,res)=>{
    res.status(200).json({"message":"file is uploaded!!!"})	
})

router.get('/logout',teacherAuthentication,async (req,res)=>{
    await client.connect();

    //token clear in db
    let db = client.db(DATABASE_NAME);
    let {email} = req.headers;
    await db.collection("teachers").updateOne({"email":email},{$set:{ "token":''}});
    res.status(200).json({"message":"Logout successfull"})	
})

router.get('/getTeachers',teacherAuthentication,async (req,res)=>{
    await client.connect();
    //select the databse from mongodb server
    let db = client.db(DATABASE_NAME);
    let existResult =  await db.collection("teachers").find().toArray()
    res.status(200).json(existResult)	
})

//send file as the response
/**
 * http://localhost:8080/teacher/getPicture?name=Screenshot_1610629400.png
 */
router.get('/getPicture',(req,res)=>{

    //get the file name from the url.
    let {name} = req.query;

    //sending the file as the response
    res.sendFile(path.resolve('uploads/'+name));
})


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



// // 
// app.post("/login",(req,res)=>{
// 	await client.connect();
// 	let data ={
// 		"email":"",//get from request body
// 		}

//     //select the databse from mongodb server
//     let db = client.db(DATABASE_NAME);

// 	//if any login attempt is exist or not by the email in mongodb.


//     //fetch the user by the email.
//     let dbResult = await db.collection("tbl_name").find({"email":email}).toArray();
// 	if(dbResult.length >0){
// 			if(dbResult[0]['password'] == req['body']['password']){
				
// 				res.status(200).json({"message":"u r crct!!!"})				
// 			}else{
// 			let login_attempt  = 1;
// 			// if db has login_attemp add by 1.
// 			if(!isNaN(dbResult[0]['login_attempt'])){	
// 				login_attempt  = dbResult[0]['login_attempt']+1;
// 			}
			
// 		await db.collection("tbl_name").updateOne({"email":email},{$set:{ "login_attempt": login_attempt}});
// 		res.status(400).json({"message":"Password is wrong!!!"})			
	
// 		}
// 	}else{
// 	    res.status(400).json({"message":"u r wrong!!!"})			
// 	}
// })
// login_attempt:
// 	when user is attempt to login with wrong password for more than 3 times.
// 	then account will be locked.


// 1.confirm the user is exist in the database.
// 2.validate the dbpassword against the password from the request.
// 	if above condition matches throw the response with 200 status code.
// 	else  
// 	   1.read the exist login_attempt_count from the db
// 	   2.add +1 with login_attempt_count (from the db)
// 		if(login_attempt_count field is not exist for the mongo_db_object){
// 			consider login_attempt_count is 0.
// 		}
// 	   3.update the new login_attempt_count in the db 	
// 	   4.throw the response with 400 status code.