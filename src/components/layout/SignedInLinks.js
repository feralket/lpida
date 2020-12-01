import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedInLinks = () => {
    return (
        <ul className="right">
            <li><NavLink to='/'>Cart</NavLink></li>
            <li><NavLink to='/'>Orders</NavLink></li>
            <li><NavLink to='/'>Log out</NavLink></li>
            <li><NavLink to='/' className="btn btn-floating cyan lighten-3 pulse">MR</NavLink></li>
        </ul>
    )
}

export default SignedInLinks;