import { useNavigate } from "react-router-dom";

export class HttpService{
    API_URL ="https://reqres.in/api/";
    get(endpoint){
            return fetch(this.API_URL+""+endpoint,{headers:{"content-type":"application/json"}})
    }
    async post(endpoint,body){
       let res =  await fetch(this.API_URL+""+endpoint,{method:"POST","body":body,headers:{"content-type":"application/json"}});
        return await res.json();
    }

    put(){

    }

    delete(){

    }
}