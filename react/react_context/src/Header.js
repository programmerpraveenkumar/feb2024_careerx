import { useContext } from "react"
import { Context } from "./config/ContexConfig";
import { HEADER_PAGE_NAME } from "./AppConstant";

export default function Header(){
    const{name,setName} = useContext(Context);
    const sendData=()=>{
        //update the state variable
        setName('from header'+(Math.random()*3));
    }
    return(
        <>
        <h1>{HEADER_PAGE_NAME}</h1>
        <button onClick={()=>sendData()}>Send</button>
        </>
        
    )
}