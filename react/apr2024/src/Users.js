import { useEffect, useState } from "react"
import Footer from "./Footer"
import Header from "./Header"
import { HttpService } from "./Service/HttpService";

export default function Users(){
    const[userList,setUserList] = useState([]);
    const http = new HttpService();

    const getApi =async (pageNo)=>{
        let jsonRes = await http.get("users?page="+pageNo)
        setUserList(jsonRes['data']);
    }

    useEffect(()=>{
        getApi(1);
    },[])
    const changePageNo=(obj)=>{
      getApi(obj.target.value);
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
        select PageNo
        <select onChange={(e)=>changePageNo(e)}>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
        </select>
      </div>
      {/* <button onClick={()=>getApi()}>get Usr Data</button> */}
      {/* <div class="carousel-wrap ">
        <div class="owl-carousel team_carousel"> */}
        {userList.length == 0?<h1>No User Found</h1>:''}
         
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