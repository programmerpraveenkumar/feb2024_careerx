import { useDispatch, useSelector } from "react-redux";
import Header from "./Header";

export default function Home(){
    //read from redux store
  const counterVal = useSelector((state) => state.counter);
  const countryTxt = useSelector((state) => state.country);

//dispatch action to redux
  const dispatch = useDispatch();

    const callRedux1=()=>{
         dispatch({
             type: "INCREMENT"
        })
    }    
    const callRedux2=()=>{
        dispatch({
            type: "DECREMENT"
       })
   }    
    // const callUpdate=()=>{
    //     dispatch({
    //         type: "addTxt"
    //    })
    // }
    
    return (
        <>
        <Header/>

            <h1>this is home</h1>
            <h1>from Redux {counterVal}</h1>
            <h1>{countryTxt}</h1>
            <button onClick={()=>callRedux1()}>INCREMENT</button>
            <button onClick={()=>callRedux2()}>DECREMENT</button>
            <button onClick={()=>dispatch({"type":"america"})}>Change country</button>
            {/* <button onClick={()=>callUpdate()}>update Txt</button> */}

        </>
    )
}