import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../context/auth-context';

import './NavLinks.css';

const NavLinks = props => {
    const auth = useContext(AuthContext);
    
    return(
        <ul className="nav-links">
            <li>
                <NavLink to="/" exact>ALL USERS</NavLink>
            </li>

            <li>
                <NavLink to="/u1/places">MY PLACES</NavLink>
            </li>

            <li>
                <NavLink to="/places/new">ADD PLACES</NavLink>
            </li>

            <li>
                <NavLink to="/auth">AUTHENTICATE</NavLink>
            </li>
        </ul>
    );
}

export default NavLinks;