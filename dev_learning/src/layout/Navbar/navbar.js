import { Button2 , Button1 } from "../../components/button/button";
import { useNavigate } from 'react-router-dom';
import './navbar.css'
export function Navbar(){
    const navigate = useNavigate();

    const homeclick=()=>{
        navigate('/');
    }

    const coursesclick=()=>{
        navigate('/Courses');
    }
    
    const aboutusclick=()=>{
        navigate('/AboutUs');
    }

    const pricingclick=()=>{
        navigate('/Princing');
    }
    
    const contactclick=()=>{
        navigate('/Contact');
    }

    const signupclick=()=>{
        navigate('/SignUp');
    }

    const loginclick=()=>{
        navigate('/Login');
    }


    return (
        <div className="navbar">
            <div className="container">
                <img 
                    src="devanant_app_private_limited_logo.jpeg" 
                    className="icon" 
                    alt="Logo" 
                />
                <div className="nav-buttons">
                    <Button1 onClick={homeclick}>Home</Button1>
                    <Button1 onClick={coursesclick}>Courses</Button1>
                    <Button1 onClick={aboutusclick}>About Us</Button1>
                    <Button1 onClick={pricingclick}>Pricing</Button1>
                    <Button1 onClick={contactclick}>Contact</Button1>
                </div>
            </div>
            <div className="buttons container">
            <Button1 onClick={signupclick}>Sign Up</Button1>
            <Button2 onClick={loginclick}>Login</Button2>
            </div>
        </div>
    )
}

