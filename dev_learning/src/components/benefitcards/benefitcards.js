import './benefitscards.css'



export function Benefitscards({title,description,content}){
    return (
        <div className='Card'>
            <div className='title'>{title}</div>
            <h3 className='description'>{description}</h3>
            <h4 className='content'>{content}</h4>
            <div className='icon' >
            
            </div>
        </div>
    )
}