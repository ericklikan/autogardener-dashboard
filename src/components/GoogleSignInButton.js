import React, { Component } from 'react';
import { connect } from "react-redux";
import firebaseui from 'firebaseui';
import { firebaseAuth } from '../config/firebase_config';
import { firebaseuiConfig } from '../config/firebaseui_config';
import { actions } from '../actions';
import { constants } from '../constants';
import login from '../actions';

class GoogleSignInButton extends Component {

    constructor(props) {
        super(props);
        if(firebaseui.auth.AuthUI.getInstance()) {
            this.ui = firebaseui.auth.AuthUI.getInstance()
        } else {
            this.ui = new firebaseui.auth.AuthUI(firebaseAuth)
        } 
    }

    componentDidMount() {
        this.ui.start('#firebaseui-auth-container', firebaseuiConfig);
    
    }

    render() {
        return (
            <div id="firebaseui-auth-container">
                <link type="text/css" rel="stylesheet" href="https://cdn.firebase.com/libs/firebaseui/3.4.1/firebaseui.css" />
            </div>
        )
    }
}

const connectedGoogleButton = connect()(GoogleSignInButton)
export { connectedGoogleButton as GoogleSignInButton };