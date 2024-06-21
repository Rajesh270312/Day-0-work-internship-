import { Navbar } from "../../layout/Navbar/navbar";
import { Topbar } from "../../layout/Topbar/topbar";
import { HeroSection } from "../../layout/HeroSection/Hero";
import './home.css'
import { Footer } from "../../layout/Footer/Footer";
import { Benefitscards } from "../../components/benefitcards/benefitcards";




export function Home(){
    return <div style={{
        backgroundColor:" rgb(255, 255, 255)",
    }}>
        <Topbar/>
        <Navbar/>
        <HeroSection/>
        <Promotion />
        <video width="90%" controls style={{
            borderRadius:"10px",
            display:"flex",
            alignSelf:"center",
            margin:"5%"
        }}>
            <source src="bannervideo.mp4" type="video/mp4"/ >
        </video>
        <Benefits />
        <Footer />
    </div>
}

function Promotion(){
    return (
        <div className="promotion" >
            <div class="promotion-content">
                <img src="Adobe.png" alt="Company 1" />
                <img src="amazon.png" alt="Company 2" />
                <img src="netflix.png" alt="Company 3" />
                <img src="notion.png" alt="Company 4" />
                <img src="spotify.png" alt="Company 5" />
                <img src="zapier.png" alt="Company 6" />
                <img src="zoom.png" alt="Company 7" />

                <img src="Adobe.png" alt="Company 1" />
                <img src="amazon.png" alt="Company 2" />
                <img src="netflix.png" alt="Company 3" />
                <img src="notion.png" alt="Company 4" />
                <img src="spotify.png" alt="Company 5" />
                <img src="zapier.png" alt="Company 6" />
                <img src="zoom.png" alt="Company 7" />
            </div>
        </div>
    )
}

function Benefits(){
    return(
        <div style={{width:"100%",height:"auto"}}>
            <div >
                <h1>Benefits</h1>
                <p>Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.</p>
            </div>
            <Benefitscards title={"01"} description={"Flexible Learning Schedule"} content={"Fit your coursework around your existing commitments and obligations."} />
            <Benefitscards title={"02"} description={"Flexible Learning Schedule"} content={"Fit your coursework around your existing commitments and obligations."} />
        </div>
    )
}