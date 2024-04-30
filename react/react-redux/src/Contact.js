import React from "react";
import Header from "./Header";

export default class Contact extends React.Component{
    state={
            "name":"test state"
    }
    //api call
    constructor(){
        super();
        console.log("this is contact constructor..");
    }
    //below method will be called when page is loading..life cycle method.
    componentDidMount(){
        console.log("page is loaded ..");
    }
    //below method will be called when page is exit..life cycle method.
    componentWillUnmount(){
        console.log("page is exit.");
    }
    static getDerivedStateFromProps(props, state){
        // console.log("props",props,state);
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log("comp update..",nextProps,nextState);
        if(nextProps.name >= 10){
            return false;
        }
        return true;
    }

    //when error happens below method wil called by react
    componentDidCatch(error, info){
        console.log("custom error ",error,info);
        alert("ERROR IN APP");
    }
    
    render(){
        return(
            <>
                <Header/>
                <h1>{this.props.waef.toUpperCase()}</h1>
                <h1>this is heading</h1>
            </>
        )
    }
}