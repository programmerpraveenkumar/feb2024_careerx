import Header from "./Header";
import Footer from "./Footer";
import { useRef,useState } from "react";

export default function Student(){
    let nameRef=useRef();
    let  emailRef=useRef();
    let  addressRef=useRef();
    const[userList,setUserList] = useState([]);

    const createStudent= async()=>{
        let data ={
            "email":emailRef.current.value,
            "name":nameRef.current.value,
            "address":addressRef.current.value,
       }
        let response = await fetch("http://localhost:8080/user/createStudent",
                            {
                                headers:{"content-type":"application/json"},
                                method:"POST",
                            body:JSON.stringify(data)})
        let json = response.json();
        console.log(json);
    }

const getStudents=async()=>{
let response = await fetch("http://localhost:8080/user/getStudents",{method:"GET"})
        let json = await response.json();
        setUserList(json);
}
    return(
        <div>
            <Header/>
            <div className="content">
               <input ref={nameRef} type="text" placeholder="Enter Name"/>
               <input  ref={emailRef} type="text" placeholder="Enter Address"/>
               <input  ref={addressRef} type="text" placeholder="Enter Email"/>
               <input onClick={()=>createStudent()} type="button" value="Send"/>
               <input onClick={()=>getStudents()} type="button" value="getStudents"/>
            </div>
            {
            userList.map((obj,index)=>{
                return <li key={index}>{obj.name}{obj.email}{obj.address}</li>
            })
            }
            
            <Footer/>
        </div>
    )
}