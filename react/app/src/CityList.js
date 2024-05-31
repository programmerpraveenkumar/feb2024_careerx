export default function CityList(props){
    return (
        <>
       { 
       props.cityDetails.map((obj,index)=>{
                    return(                
                    <>
                        <p key={index}>
                        <span>{obj.firstname} and the population count is {obj.peopleCount}</span>
                        <a href="http://google.com">google</a>
                        </p>
                        {/* <button onClick={()=>showCityName(obj.firstname)}>Click me</button> */}
                    </>        
                )
             })
    }
        </> 
    )
}

