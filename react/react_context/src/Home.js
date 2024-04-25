import { useContext } from "react";
import { Context } from "./config/ContexConfig";
import { HOME_PAGE_NAME } from "./AppConstant";

export default function Home(){
    const{name} = useContext(Context);
    return(
        <>

        <h1>{HOME_PAGE_NAME}</h1>
            {name}
        </>
    )
}