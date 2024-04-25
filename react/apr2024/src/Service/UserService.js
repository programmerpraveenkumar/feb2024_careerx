import { useNavigate } from "react-router-dom";

export class UserService{
    navigate = useNavigate();
    checkToken(){
        let token = localStorage.getItem("token");
        if(token == undefined || token == ''){
            this.navigate("/login");
        }        
    }
    getToken(){
        return localStorage.getItem("token");
    }
}