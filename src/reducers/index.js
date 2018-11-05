import { combineReducers } from "redux";
import { actions } from "../actions";
import { constants, loginStates } from "../constants";

const rawUser = localStorage.getItem(constants.USER);
let user = {};
let loggedIn = loginStates.loggedOut;
if(rawUser) {
    user = JSON.parse(rawUser) ;
    loggedIn = loginStates.loggedIn;
}

console.log(user, loggedIn);

const setAuth = (state = {user, loggedIn}, action) => {
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
};

const rootReducer = combineReducers({
    setAuth
});

export default rootReducer;