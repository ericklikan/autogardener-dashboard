import firebase from 'firebase';

var config = {
    signInSuccessUrl: '/dashboard',
    signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID
    ]
};

export const firebaseuiConfig = config;