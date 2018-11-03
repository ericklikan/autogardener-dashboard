import React, { Component } from 'react';
import { connect } from 'react-redux';
import { GoogleSignInButton  }from "../components/GoogleSignInButton";

class Login extends Component {
    
    render() {
        return (
            <div>
                <GoogleSignInButton/>
            </div>
        )
    }
}

const connectedLogin = connect()(Login)
export { connectedLogin as Login };