import { useDispatch, useSelector } from "react-redux";

export default function Home(){
    //read from reedux store
  const counter = useSelector((state) => state);
  const dispatch = useDispatch();

    const callRedux=()=>{
         dispatch({
             type: "increment"
        })
    }       
    
    return (
        <>
            <h1>this is home</h1>
            <h1>{counter}</h1>
            <button onClick={()=>callRedux()}>INCREMENT</button>
        </>
    )
}