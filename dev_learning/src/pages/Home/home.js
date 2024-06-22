import { Navbar } from "../../layout/Navbar/navbar";
import { Topbar } from "../../layout/Topbar/topbar";
import { HeroSection } from "../../layout/HeroSection/Hero";
import './home.css'
import { Footer } from "../../layout/Footer/Footer";
import { Benefitscards } from "../../components/benefitcards/benefitcards";
import { Button1 } from "../../components/button/button";
import { CoursesCard } from "../../components/CoursesCard/CoursesCard";




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
        <Courses />
        <Footer />
    </div>
}

function Promotion(){
    return (
        <div className="promotion" >
            <div className="promotion-content">
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

    function increase(){
        return (
            <div>

            </div>
        )
    }

    return(
        <div style={{display:"flex" , justifyContent:"center"}}>
            <div className="BenefitBox">
            <div className="Benefitheading" >
                <div style={{width:"60%"}}>
                    <h1 style={{fontFamily:" 'Be Vietnam Pro',sans-serif" , color: "rgba(38, 38, 38, 1)"}}>Benefits</h1>
                    <p style={{fontFamily:" 'Be Vietnam Pro',sans-serif" , color: "rgba(51, 51, 51, 1)"}}>Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.</p>
                </div>
                <div style={{alignSelf:"self-end"}}>
                    <Button1 onClick={increase} >View All</Button1>
                </div>
            </div>
            <div className="Cardgrid">
                
                    <Benefitscards title={"01"} description={"Flexible Learning Schedule"} content={"Fit your coursework around your existing commitments and obligations."} />
                    <Benefitscards title={"02"} description={"Expert Instruction"} content={"Learn from industry experts who have hands-on experience in design and development.."} />
                    <Benefitscards title={"03"} description={"Diverse Course Offerings"} content={"Explore a wide range of design and development courses covering various topics."} />
                
                    <Benefitscards title={"04"} description={"Updated Curriculum"} content={"Access courses with up-to-date content reflecting the latest trends and industry practices."} />
                    <Benefitscards title={"05"} description={"Practical Projects and Assignments"} content={"Develop a portfolio showcasing your skills and abilities to potential employers."} />
                    <Benefitscards title={"06"} description={"Interactive Learning Environment"} content={"Collaborate with fellow learners, exchanging ideas and feedback to enhance your understanding."} />
              
            </div>
        </div>
        </div>
        
    )
}

function Courses(){
    function increase(){
        return (
            <div>

            </div>
        )
    }
     return(
        <div style={{display:"flex" , justifyContent:"center"}}>
            <div className="BenefitBox">
            <div className="Benefitheading" >
                <div style={{width:"60%"}}>
                    <h1 style={{fontFamily:" 'Be Vietnam Pro',sans-serif" , color: "rgba(38, 38, 38, 1)"}}>Our Courses</h1>
                    <p style={{fontFamily:" 'Be Vietnam Pro',sans-serif" , color: "rgba(51, 51, 51, 1)"}}>Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.</p>
                </div>
                <div style={{alignSelf:"self-end"}}>
                    <Button1 onClick={increase} >View All</Button1>
                </div>
            </div>
            <div className="Coursegrid">
                
                    <CoursesCard img={"Adobe.png"} time={"5 months"} level={"Intermediate"} proff={"By Nema Ram Sir"} name={"Web Design Fundamentals"} details={"Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites."} /> 
                
                    <Benefitscards title={"04"} description={"Updated Curriculum"} content={"Access courses with up-to-date content reflecting the latest trends and industry practices."} />
                    <Benefitscards title={"05"} description={"Practical Projects and Assignments"} content={"Develop a portfolio showcasing your skills and abilities to potential employers."} />
                    <Benefitscards title={"06"} description={"Interactive Learning Environment"} content={"Collaborate with fellow learners, exchanging ideas and feedback to enhance your understanding."} />
              
            </div>
        </div>
        </div>
        
    )
}