import React from 'react'
import SideBar from '../Sidebar'
import './style.css'

function Layout(props) {
    return (
        <div>
            {props.children}
            <SideBar/>
        </div>
    )
}

export default Layout
