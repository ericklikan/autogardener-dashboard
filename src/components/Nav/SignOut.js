import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { firebaseAuth } from '../../config/firebase_config';
import { constants } from '../../constants';

class SignOut extends Component {

    static click() {
        localStorage.removeItem(constants.USER);
        firebaseAuth.signOut();
    }

    render(){
        return(
            <ul className="right">
                <li><NavLink to="/login" onClick={SignOut.click}>Logout</NavLink></li>
            </ul>
        );
    }
}

export default SignOut;