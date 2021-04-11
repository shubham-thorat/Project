import React from 'react'
import './style.css'
function Header() {
    return (
        <header className="header">
            <nav className="headerMenu">
                <a href='#'> Menu</a>
                <a href='#'> About</a>
                <a href='#'> Contact</a>
            </nav>
            <div>
               <a href="https://www.instagram.com/shubham.thorat_" target="__blank"> <i className="fab fa-instagram"></i> </a>
               <a href="#"> <i className="fab fa-twitter"></i> </a>
               <a href="#"> <i className="fab fa-google"></i> </a>
            </div>
        </header>
    )
}

export default Header
