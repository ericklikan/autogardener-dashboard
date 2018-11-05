import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Redirect} from "react-router-dom"
import { connect } from "react-redux";
import { Login } from './pages/Login';
import { firebaseAuth } from './config/firebase_config';
import { actions } from './actions';
import { constants, loginStates } from './constants';
import Dashboard from './pages/Dashboard';
import LoadingPage from './pages/LoadingPage';
import Navbar from './components/Nav/Navbar';

import './App.css';

class App extends Component {

    componentWillMount() {
        firebaseAuth.onAuthStateChanged((user) => {
            localStorage.setItem(constants.USER, JSON.stringify(user))
            let type = user ? actions.LOGGED_IN : actions.LOGGED_OUT
            this.props.dispatch({type, user})
        });
    }

    render() {
        return (
            <Router>
                <div>
                    <Navbar loggedIn={this.props.auth.loggedIn}/>
                    <Route
                        path="/dashboard"
                        render={props =>
                        this.props.auth.loggedIn === loginStates.loggedIn ? (
                            <Dashboard/>
                        ) : (
                            <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: props.location }
                            }}
                            />
                        )
                        }
                    />
                    { (this.props.auth.loggedIn === loginStates.loggingIn) && 
                        <LoadingPage/>
                    }
                    <Route path='/login' component={Login}/>
                </div>
            </Router>
        );
    }
}

function mapStateToProps(state) {
    if (!state.setAuth) {
        return {auth: {loggedIn: true} }
    }
    return {
        auth: state.setAuth
    }
}

const connectedApp = connect(mapStateToProps)(App)
export { connectedApp as App };
