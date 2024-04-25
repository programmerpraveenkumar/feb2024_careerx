import React, { Component, createRef } from "react";
import UserList from "./UserList";


export default class Register1 extends Component{
    nameRef = createRef();
	state={
        "firstName":"sample first Name",
        "lastName":"sample last name",
        "age":45,
        "nameList":["test","test1","test2","test","test1","test2"],
        userList:[]
    }
    async printMessage(){
        console.log(this.nameRef.current.value);
        let res = await fetch("https://reqres.in/api/users?page=2",{method:"GET"});
        let json = await res.json();
        //updating state variable
        this.setState({"userList":json['data']});
    }
    render(){
		return(
			<div>
                Sample data
                {this.state.nameList[0]}
                <p>{this.state.firstName}</p>
               
                <input ref={this.nameRef} type="textbox" placeholder="Enter Name"/>
                <button onClick={()=>this.printMessage()}>Click</button>
                {/* sharing the data to child compnent */}
                <UserList userData={this.state.userList}/>
                {
           this.state.userList.map((obj,index)=>{
                return(
                    <p key={index}>
                        {obj.first_name}
                        <img src={obj.avatar}/>
                    </p>
                )
            })          
        }
            </div>
		)
    }
}