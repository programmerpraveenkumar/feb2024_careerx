import Header from "./Header";
import Footer from "./Footer";
import './Common.css'


export default function Home(){
    let firstName = 'this is react app';
    let mobileNo = 54545454;
    //array
    let nameList = ['test','rfg','erg','ertert','erfrr3t'];
    let cityList = ['sdf','sef','trt','o0','345345'];
    let cityDetails =[ 
        {'firstname':"tstcity",'peopleCount':454},
       {"firstname":"testcity2",'peopleCount':454575},
       {"firstname":"testcity3",'peopleCount':8999},
       {"firstname":"testcity4",'peopleCount':1999}
     ];
     //cityDetails[0]['peopleCount']
    //document.getElementByID('id').innnerHTML = firstName;
    const showCityName=(name)=>{
            alert(name);
    }
        return(
        <div>
            <Header/>
            <div className="content">
                <div className="left-content">
                <h1>this is left component</h1>
                </div>
                <div>
                <h1>this is home component</h1>
                <h2>{firstName}</h2>
                <h2>{mobileNo}</h2>
                </div>
                <div  className="right-content">
                <h1>this is right component</h1>
                </div>

            </div>
            {
                cityDetails.map((obj,index)=>{
                    
                       return <>
                                <p key={index}>
                                    <span>{obj.firstname} and the population count is {obj.peopleCount}</span>
                                    <a href="http://google.com">google</a>
                                </p>
                                <button onClick={()=>showCityName(obj.firstname)}>Click me</button>
                            </> 
                    
                })
            }
            ----------------------------------
            {
                nameList.map((obj,index)=>{
                    return (
                        <h4 key={index}>{obj}</h4>
                    )
                })
            }

            --------------------------
            {
                cityList.map((val,key)=>{
                            return (
                                <h4 key={key}>{val}</h4>
                            )
                })
            }
-------------------------------------
            


            <Footer/>
        </div>
    )
}