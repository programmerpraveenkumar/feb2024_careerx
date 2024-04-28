
import { useDispatch, useSelector } from "react-redux";
import Header from "./Header";

export default function About(){
    //read from redux store
  const counter = useSelector((state) => state.counter);
  const country = useSelector((state) => state.country);
  const dispatch = useDispatch();

  const callRedux=()=>{
    dispatch({
        type: "INCREMENT"
    })
} 
         
    return (
        <>
        <Header/>
            <h1>this is About</h1>
            <h1>{counter}</h1>
            <h1>{country}</h1>
            <button onClick={()=>callRedux()}>INCREMENT</button>
        </>
    )
}
