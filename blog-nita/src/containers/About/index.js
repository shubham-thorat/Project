import React from 'react'
import './style.css'

function AboutUs() {
    return (
        <div className="box">
            <h2>
                This is website made with react js ..<br />
             And improving day by day ... <br />
             Stay tune to website 
             <img src={require('../../Images/heart.png').default} />
            </h2>
           
        </div>
    )
}

export default AboutUs
