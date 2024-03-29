import Header from "./Header";
import Footer from "./Footer";
import { useRef } from "react";

export default function Register(){
    let input1Ref = useRef();
    let input2Ref = useRef();
    let input3Ref = useRef();
    let input4Ref = useRef();
    const validate=()=>{
            if(input1Ref.current.value==''){
                alert("Name should not be empty");
            }
            //add validation for other 3 textboxes.
    }

    return(
        <div>
        <input type="text" ref={input1Ref} placeholder="Enter Name"/>

        <input type="text" ref={input2Ref} placeholder="Enter Email"/>

        <input type="text" ref={input3Ref} placeholder="Enter Address"/>

        <input type="text" ref={input4Ref} placeholder="Enter Message"/>

        <button onClick={()=>validate()}>Update variable</button>
        </div>
    )
}