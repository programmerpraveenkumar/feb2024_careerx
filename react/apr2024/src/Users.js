import { useState } from "react"
import Footer from "./Footer"
import Header from "./Header"

export default function Users(){
    const[userList,setUserList] = useState([]);
    const getApi =async ()=>{
        let res = await fetch("https://reqres.in/api/users?page=1",{method:"GET"})
        let jsonRes = await res.json();
        setUserList(jsonRes['data']);
    }
    return(
        <>
        <Header/>
        <section class="team_section layout_padding">
    <div class="container">
      <div class="heading_container heading_center">
        <h2>
          Our <span>User</span>
        </h2>
      </div>
      <button onClick={()=>getApi()}>get Usr Data</button>
      {/* <div class="carousel-wrap ">
        <div class="owl-carousel team_carousel"> */}
         
         {
            userList.map((obj,index)=>{
                    return <div key={index} class="item">
                    <div class="">
                    <div class="img-box">
                        <img src={obj.avatar} alt="" />
                    </div>
                    <div class="detail-box">
                        <h5>
                        {obj.first_name}
                        </h5>
                    </div>
                    </div>
                    </div>
            })
            
         }
         


          
        </div>
      {/* </div>
    </div> */}
  </section>
<Footer/>
</>
    )
}