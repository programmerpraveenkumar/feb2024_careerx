import { useRef, useState } from "react";

export default function Concepts(){
    let input1Ref = useRef();
    const[mobile,setMobile] = useState('65656565');//variable with value
    const[address,setAddress] = useState();//state variable without value
    const[nameList,setNameList] = useState([ 
        {'firstname':"tstcity",'peopleCount':454},
       {"firstname":"testcity2",'peopleCount':454575},
       {"firstname":"testcity3",'peopleCount':8999}
     ]);//state variable without value

    const updateMobile=()=>{
        //read the value from textbbox using ref
        let val = input1Ref.current.value;
        setMobile(val);
    }
    const changeAddress=()=>{
        setAddress('sample address');
    }
    const getApiData=async ()=>{
        let response = await fetch("https://reqres.in/api/users?page=2",{method:"GET"});
        let res = await response.json();
        console.log(res);
    }
    return (
        <>        
        <input type="text" ref={input1Ref} placeholder="Enter Message"/>
            <h1>{mobile}</h1>
            <button onClick={()=>updateMobile()}>Update variable</button>

            <h1>{address}</h1>
            <button onClick={()=>changeAddress()}>Update Address</button>
            {
                nameList.map((obj,index)=>{
                        return(
                            <h1 key={index}>{obj.firstname}</h1>
                        )
                })
            }
        </>
    )
}