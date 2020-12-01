import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'

const NavBar = () => {
    return (
        <nav className="nav-wrapper black">
            <div className="container">
                <Link to='/' className="lpida-logo">Lpida</Link>
                <SignedInLinks />
                <SignedOutLinks />
            </div>
        </nav>
    )
}

export default NavBar;