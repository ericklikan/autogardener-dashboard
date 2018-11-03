import React from 'react';
import { NavLink } from 'react-router-dom';

const SignIn = () => {
    return(
        <ul className="right">
            <li><NavLink to="/login">Sign In</NavLink></li>
        </ul>
    );
}

export default SignIn;