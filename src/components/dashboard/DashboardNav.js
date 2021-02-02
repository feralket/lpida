import React from 'react'
import { NavLink } from 'react-router-dom'
import './dashboardnav.css'


const DashboardNav = () => {
    return (

        <nav className="grey darken-4">
            <ul className="container">
                <li><NavLink to='/products'>Products</NavLink></li>
                <li><NavLink to='/about'>About</NavLink></li>
            </ul>
        </nav>
        
    )
}

export default DashboardNav;