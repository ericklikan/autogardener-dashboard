import firebase from 'firebase/app';
import 'firebase/auth';

const config = {
    signInSuccessUrl: '/dashboard',
    signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID
    ]
};

export const firebaseuiConfig = config;