import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Login(){
    let emailRef = useRef();
    const navigate = useNavigate();
    let pwdRef = useRef();
    const[status,setStatus] = useState(false);
    const[clsName,setClsName] = useState('red');
    const[clsName2,setClsName2] = useState('red');
    const apiCall=async ()=>{
        if(emailRef.current.value == ''){
            alert("Pls enter Email");
            return;//stop the execution
        }else if(pwdRef.current.value == ''){
            alert("Pls enter Pwd");
            return;//stop the execution
        }
        let data = {
            "email": emailRef.current.value,
            "password": pwdRef.current.value
        }
        //list of users from the api.
        let response = await fetch("https://reqres.in/api/login",{method:"POST",body:JSON.stringify(data),
        headers:{"content-type":"application/json"}});
          let userData = await response.json();
        if(response.ok){
            console.log(userData);
            localStorage.setItem('token',userData['token']);//store the token when login is success.
            navigate('/home');
        }else{
            alert(userData['error']);           
        }
       
    }
    const showEle=()=>{
            setStatus(true)
    }
    const hideEle=()=>{
        setStatus(false)
    }
    const changeCls=(clsName)=>{
        setClsName(clsName);
    }
    const changeCls2=()=>{
        let tmp = (clsName2=='red')?'blue':'red';
        setClsName2(tmp);
    }
    return(
        <div>
        <input type="text" ref={emailRef} placeholder="Enter Name"/>
        <input type="text" ref={pwdRef}  placeholder="Enter PWD"/>
        <input type="button" value="Click me" onClick={()=>apiCall()}/>
        <div>
           { (status)?<p>this is paragraph</p>:null}
            <button onClick={()=>showEle()}>Show </button>
            <button onClick={()=>hideEle()}>hide </button>
        </div>
        <p className={clsName}>hi this is sample text</p>
        <button onClick={()=>changeCls('red')}>Red</button>
        <button onClick={()=>changeCls('blue')}>Blue</button>
        <p className={clsName2}>hi this is sample text</p>
        <button onClick={()=>changeCls2()}>Toggle</button>
       
        </div>
    )
}