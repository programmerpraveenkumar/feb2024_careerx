import { useEffect } from "react";
import { NavLink } from "react-router-dom";

export default function Header(){
    useEffect(()=>{console.log("heading load..");},[])
    return(
        <>
        {/* a tag will refresh the app while navigation.so state will deleted. */}
        {/* <a href="home">Home</a>
        <a href="about">About</a> */}

        {/*
         NavLink tag will not refresh the app while navigation.
         so state will not deleted. 
         but navigation will also happen.        
        */}
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        </>
    );

}