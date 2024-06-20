import { Navbar } from "../../layout/Navbar/navbar";
import { Topbar } from "../../layout/Topbar/topbar";
import { HeroSection } from "../../layout/HeroSection/Hero";
import './home.css'
export function Home(){
    return <div >
        <Topbar/>
        <Navbar/>
        <HeroSection/>
        <Promotion />
    </div>
}

function Promotion({prop}){
    return (
        <div className="promotion">
            
        </div>
    )
}