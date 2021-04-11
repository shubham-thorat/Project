import React from 'react'
import './style.css'

function ContactUs() {
    return (
        <div className="CardBox">
            <div className="ImageBox" >
                <img src={require('../../Images/me.png').default} /> 
            </div>
            <ul className="cardBoxElement">
                <li> <a href="mailto:fakeaccount@gamil.com"> Gmail : fakeaccount@gmail.com </a></li>
                <li>  <a href="tel:+911122334455"> Call Me : +911122334455 </a></li>
                <li> <a href="#"> Address : lonar, dist.Buldhana , st.Maharashtra</a></li>
                <li> <a href="#"> Dare : Don't Find Me </a></li>     
            </ul>
        </div>
    )
}

export default ContactUs
