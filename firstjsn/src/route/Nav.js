import React from 'react'
import './../index.css'
import {NavLink} from 'react-router-dom';

function Nav() {
    return (
        <div>

            <NavLink exact to='/' activeClassName='activeclass' >Home ....... </NavLink>
            <NavLink exact to='/about' activeClassName='activeclass'>About Us  ......</NavLink>
            <NavLink exact activeClassName='activeclass' to='/contact'>Contact Us .....</NavLink>

        </div>
    )
}

export default Nav;