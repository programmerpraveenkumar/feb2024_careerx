import "./Header.css";
import { useNavigate } from 'react-router-dom';

export default function Header(){
    const navigate = useNavigate();
    const logout =()=>{
        /*
            clear the storage
            navigate to login screen
        */
        localStorage.removeItem('token');
        navigate('/login');
    }
    return <div>
        <ul>
            <li>
                <a href="home">Home</a>
            </li>
            <li>
                <a href="about">About</a>
            </li>
            <li>
                <a href="contact">Contact</a>
            </li>
                <li>
                    <button onClick={()=>logout()}>Logout</button>
            </li>
        
        </ul>
        
    </div>
}