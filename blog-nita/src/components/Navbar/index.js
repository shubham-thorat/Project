import React,{useState} from 'react'
import {NavLink} from 'react-router-dom'
import './style.css'

function Navbar() {

    const [blog,setBlog] = useState('')
    const clickHandler = (e)=>{
        e.preventDefault()
        const searchBlog = document.getElementById("searchInput")
        searchBlog.style.width = "200px";
        if(blog.length !== 0){
            // console.log(blog)
            searchBlog.value = ""
        }
    }
   
    return (
        <div className="Home-Nav">
            <ul className="Navbar">
                <li> <NavLink to="/"> Home </NavLink></li>
                <li> <NavLink to="/post"> Post </NavLink></li>
                <li> <NavLink to="/contact-us"> Contact </NavLink></li>
                <li> <NavLink to="/about-us"> About Us </NavLink></li>
            </ul>
            <form className="searchbox" onSubmit={clickHandler}>
                <input placeholder="Search Blog" id="searchInput"  onChange={e => setBlog(e.target.value)}/>
                <button className="btn" type='submit'> <i className="fab fa-searchengin" style={{fontSize:"23px"}}></i> </button>
            </form>
        </div>
    )
}

export default Navbar
