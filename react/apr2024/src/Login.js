import { Component, useRef } from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function Login(){
  let emailRef = useRef();
  let pwdRef = useRef();
  const loginApi =async ()=>{
    let data = {
      "email": emailRef.current.value,
      "password": pwdRef.current.value,
    }
      let res = await fetch("https://reqres.in/api/login",{method:"POST",body:JSON.stringify(data),
                headers:{"content-type":"application/json"}
              });
      let jsonRes = await res.json();
      if(res.ok){                
        console.log(jsonRes);
        alert("login is succesfull")
      }else{
        alert(jsonRes['error']);
      }
    
  }
            return(
                <>
               
<section class="contact_section layout_padding-bottom">
    <div class="container">
      <div class="heading_container">
        <h2>
         Login
        </h2>
      </div>
      <div class="row">
        <div class="col-md-7">
          <div class="form_container">
           
           
              <div>
                <input type="email" placeholder="Email" ref={emailRef} />
              </div>
              <div>
                <input type="password" placeholder="Password"  ref={pwdRef} />
              </div>
              <div class="btn_box">
                <button onClick={()=>loginApi()}>
                  Login
                </button>
              </div>
        
          </div>
        </div>
        <div class="col-md-5">
          <div class="img-box">
            <img src="images/contact-img.jpg" alt=""/>
          </div>
        </div>
      </div>
    </div>
  </section>


                </>
            )
    }