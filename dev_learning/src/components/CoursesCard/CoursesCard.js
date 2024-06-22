import { useNavigate } from 'react-router-dom'
import { Button1 } from '../button/button'
import './CoursesCard.css'

export function CoursesCard({img,level,time,proff,name,details}){
    const navigate = useNavigate();

    const coursesclick=()=>{
        navigate('/Courses');
    }
    
    return (
        <div className='Card'>
            <img src={img} style={{width:"80%", height:"auto"}} alt='img'/>
            <div className='info'>
                <div style={{border:"1px",display:"flex",justifyContent:"center"}}>
                    <div style={{margin:"5px"}}>
                         {level}
                    </div>
                    <div style={{margin:"5px"}}>
                         {time}
                    </div>
                </div>
                <div>
                    {proff}
                </div>
            </div>
            <div style={{display:"flex",flexDirection:"column", justifyContent:"flex-start"}}>
                <h2 className='title'>
                    {name}
                </h2>
                <p className='description'> 
                    {details}
                </p>
            </div>
            <Button1 onClick={coursesclick}>Enroll Now</Button1>
        </div>
    )
}