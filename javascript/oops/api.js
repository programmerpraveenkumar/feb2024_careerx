import { test } from "./api2.js";

class Api{

    async  getData(){
        let response = await fetch("https://reqres.in/api/users?page=2",{method:"GET"})
        let jsonData = await response.json();//extract the json data from server's response
        console.log(jsonData);
    }
}
let apiObj = new Api();
document.querySelector("#btn").addEventListener("click",()=>{
    apiObj.getData();
    test();
})