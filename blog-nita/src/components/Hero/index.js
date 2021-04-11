import React from 'react'
import Home from '../../containers/Home'
import Logo from '../Logo'
import Navbar from '../Navbar'
import Card from '../UI/Card'
import './style.css'

function Hero(props) {
     // console.log(props)
    return (
        <div className="Hero">
            <Card>
              <div style={{padding:"50px 0"}}>
                  <Logo/>
              </div>
              <Navbar/>
            </Card>
        </div>
    )
}

export default Hero
