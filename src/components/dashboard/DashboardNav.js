import React from 'react'
import { NavLink } from 'react-router-dom'
import './dashboardnav.css'


const DashboardNav = () => {
    return (
        // <nav class="nav-center" role="navigation">
        //     <div class="nav-wrapper grey">
        //         <ul>
        //             <li><a href="/about">About</a></li>
        //             <li><a href="/contact">Contact</a></li>
        //             <li><a href="/help">Help</a></li>
        //         </ul>
        //     </div>
        // </nav>
        <nav className="grey darken-4">
            <ul className="container">
                <li><NavLink to='/'>About</NavLink></li>
                <li><NavLink to='/'>Product</NavLink></li>
                <li><NavLink to='/'>Pictures</NavLink></li>
            </ul>
        </nav>
        
    )
}

export default DashboardNav;