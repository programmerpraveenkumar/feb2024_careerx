import { Component, useEffect, useRef, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function Contact(){
  let emailRef = useRef();
  const [email,setEmail] = useState('');
  const updateState=()=>{
    let emailVal = emailRef.current.value
    setEmail(emailVal);//update the value from the textbox
  }

  //whenver email variable changes below method will get called.
  useEffect(()=>{
    console.log("email useEfect -- ",email);
  },[email])

//below method will call only once during the loading
  useEffect(()=>{
    console.log("first time loading -- ");
  },[])
            return(
                <>
                <Header currentPage="contact"/>
<section className="contact_section layout_padding-bottom">
    <div className="container">
      <div className="heading_container">
        <h2>
          Get In Touch
        </h2>
      </div>
      <div className="row">
        <div className="col-md-7">
          <div className="form_container">
              <div>
                <input ref={emailRef} type="text" placeholder="Full Name" />
              </div>
              <div>
                <input type="email" placeholder="Email" />
              </div>
              <div>
                <input type="text" placeholder="Phone Number" />
              </div>
              <div>
                <input type="text" className="message-box" placeholder="Message" />
              </div>
              <div className="btn_box">
                <button onClick={()=>updateState()}>
                  SEND
                </button>
              </div>
          </div>
        </div>
        <div className="col-md-5">
          <div className="img-box">
            <img src="images/contact-img.jpg" alt=""/>
          </div>
        </div>
      </div>
    </div>
  </section>

  <Footer/>
                </>
            )
    }