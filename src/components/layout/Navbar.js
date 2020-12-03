import React from 'react'
import { NavLink } from 'react-router-dom'
import DashboardNav from '../dashboard/DashboardNav'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
const navHome = {
    paddingTop: '10px',
    marginBottom: '-10px'
}


const NavBar = () => {
    return (
        <div className="navbar-fixed">
            <nav className="nav-wrapper black z-depth-2">
                <div className="container"> 
                    <div className="row">
                        <ul>
                            <div className="col s6 left m3">
                                <li>
                                    <NavLink to='/' className="brand-logo left"><img src="/icons/logo_nav.png" alt="" style={navHome}/></NavLink>    
                                </li>         
                            </div>
                            <div className="col s2 m3">
                                <li><NavLink to='/products'>Products</NavLink></li>
                            </div>
                            <div className="col s2 m3">
                                <li><NavLink to='/pictures'>Pictures</NavLink></li> 
                            </div>
                            <div className="col s2 m3">
                                <li><NavLink to='/about'>About</NavLink></li>
                            </div>
                        </ul>                   
                    </div>             
                    {/* <SignedInLinks />
                    <SignedOutLinks /> */}
                </div>
            </nav> 
        </div>
    )
}

export default NavBar;