import { combineReducers } from "redux";
import { actions } from "../actions";
import { firebaseAuth } from "../config/firebase_config";
import { constants, loginStates } from "../constants";

const rawUser = localStorage.getItem(constants.USER)
var user = {}
var loggedIn = loginStates.loggedOut;
if(rawUser) {
    user = JSON.parse(rawUser) 
    loggedIn = loginStates.loggedIn;
}

console.log(user, loggedIn)

var setAuth = (state = {user, loggedIn}, action) => {
    switch (action.type) {
        case actions.LOGGED_IN:
            return {
                loggedIn: loginStates.loggedIn,
                user: action.user
            };
        case actions.LOGGED_OUT:
            return {
                loggedIn: loginStates.loggedOut,
                user: {}
            };
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    setAuth
});

export default rootReducer;