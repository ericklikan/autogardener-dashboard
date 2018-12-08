import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { loginStates } from '../../constants';


import SignIn from './SignIn';
import SignOut from './SignOut';

class Navbar extends Component {

    render() {
        return(
            <nav className="nav-wrapper green">
                <div className="container">
                    <Link to={this.props.loggedIn ? '/dashboard': '/'} className="brand-logo" >AutoGarden</Link>
                </div>
                { this.props.loggedIn === loginStates.loggedOut &&
                    <SignIn/>
                }
                { this.props.loggedIn === loginStates.loggedIn && 
                    <SignOut/>
                }
            </nav>
        )
    }
}

export default Navbar;