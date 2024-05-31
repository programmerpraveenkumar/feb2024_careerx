import React from "react";

export default class Login2 extends React.Component{
  render(){
    return(
        <div>
        <input type="text" placeholder="Enter Name"/>
        <input type="text" placeholder="Enter PWD"/>
        <input type="button" value="Click me"/>
        <div>      
            <button >Show </button>
            <button  >hide </button>
        </div>
        <p>hi this is sample text</p>
        <button>Red</button>
        <button>Blue</button>
        <p>hi this is sample text</p>
        <button>Toggle</button>
       
        </div>
    )
}
}