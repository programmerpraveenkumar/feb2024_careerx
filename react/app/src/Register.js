import Header from "./Header";
import Footer from "./Footer";
import { useRef, useState } from "react";

export default function Register(){
    let input1Ref = useRef();
    let input2Ref = useRef();
    let input3Ref = useRef();
    let input4Ref = useRef();
    let input5Ref = useRef();
    let pageNoRef = useRef();
    const [userList,setUserList] = useState([]);
    const validate=()=>{
            if(input1Ref.current.value==''){
                alert("Name should not be empty");
            }
            //add validation for other 3 textboxes.
    }
    const apiIntegration=async ()=>{
                let pageNo = pageNoRef.current.value;
                //list of users from the api.
                let response = await fetch("https://reqres.in/api/users?page="+pageNo);
                let userData = await response.json();
                console.log(userData['data']);
                setUserList(userData['data']);
    }
    const postApiIntegration=async ()=>{
        let data = {
            "name": input1Ref.current.value,
            "job": input5Ref.current.value
        }
        //list of users from the api.
        let response = await fetch("https://reqres.in/api/users",{method:"POST",body:JSON.stringify(data),
        headers:{"content-type":"application/json"}});
        let userData = await response.json();
        console.log(userData);
    }

    return(
        <div>
        <input type="text" ref={input1Ref} placeholder="Enter Name"/>
        <input type="text" ref={input5Ref} placeholder="Enter Job"/>

        <input type="text" ref={input2Ref} placeholder="Enter Email"/>

        <input type="text" ref={input3Ref} placeholder="Enter Address"/>

        <input type="text" ref={input4Ref} placeholder="Enter Message"/>

        <button onClick={()=>validate()}>Vlidate</button>
        <div>
                        <button onClick={()=>postApiIntegration()}>Click to POST data from api</button>
        </div>
        <div>
                <input ref={pageNoRef} placeholder="Enter Page No"/>
                  <button onClick={()=>apiIntegration()}>Click to get data from api</button>
        </div>
        
        {
            (userList.length == 0)?<h1>User Data not found</h1>:null
        }
        {
            
            userList && userList.map((obj,index)=>{
                    return(
                        <div class="user-box" key={index}>
                            <img style={{"width":"30%"}} src={obj.avatar}/>
                            <div style={{"float":"right"}}>         
                                <p>{obj.first_name}</p>
                                <p>{obj.last_name}</p>
                                <p>{obj.email}</p>
                            </div>
                        </div>
                    )
            })
        }
        </div>
    )
}