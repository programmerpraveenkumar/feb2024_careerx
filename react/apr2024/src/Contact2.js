import { Component, useEffect, useRef, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function Contact2(){
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const contactForm=()=>{
    console.log(name,email);
    if(name == ''){
      alert("Name should nt be empty")
    }
    else if(email == ''){
      alert("Email should nt be empty")
    }else{
      alert("everything is fine")
    }
  }

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
            {name}
              <div>
                <input onChange={(e)=>setName(e.target.value)} type="text" placeholder="Full Name" />
              </div>
              <div>
                <input type="email" onChange={(e)=>setEmail(e.target.value)}  placeholder="Email" />
              </div>
              <div>
                <input type="text" placeholder="Phone Number" />
              </div>
              <div>
                <input type="text" className="message-box" placeholder="Message" />
              </div>
              <div className="btn_box">
                <button onClick={()=>contactForm()}>
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