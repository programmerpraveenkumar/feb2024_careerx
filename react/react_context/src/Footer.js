import { useContext } from "react";
import { Context } from "./config/ContexConfig";

export default function Footer(){
    const{name} = useContext(Context);

    return(
        <>
        <h1>Footer</h1>
        {name}

        </>
        
    )
}