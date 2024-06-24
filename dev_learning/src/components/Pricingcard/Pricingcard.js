import './Pricingcard.css'

export function Pricingcard({ title, price, features, buttonLabel }){
    return (
        <div style={{width:"45%"}}>
            <div className="plan-card">
                <div className="plan-header">
                    <h3>{title}</h3>
                    <div className="plan-price">{price}
                        <span style={{fontSize:"18px" ,color:"rgba(76, 76, 77, 1)"}}>/month</span>
                    </div>
                </div>
                <ul className="plan-features">
                    <h4>Available features</h4>
                {features.map((feature, index) => (
                    <li key={index} className={`feature-item ${feature.included ? 'included' : 'not-included'}`}>
                    {feature.text}
                    </li>
                ))}
                </ul>
                <button className="plan-button">{buttonLabel}</button>
            </div>
        </div>
    )
}

    

 


