export default function Concepts(){
    const getApiData=async ()=>{
        let response = await fetch("https://reqres.in/api/users?page=2",{method:"GET"});
        let res = await response.json();
        console.log(res);
    }
    return (
        <>
            <h1>dff</h1>
            <button onClick={()=>getApiData()}>Click to get api</button>
        </>
    )
}