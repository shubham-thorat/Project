import React from 'react'
import Logo from '../../Logo'
import Navbar from '../../Navbar'
import './style.css'

function Card(props) {
    return (
        <div className="Card" {...props}>
           {props.children}
        </div>
    )
}

export default Card
