import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCH12_9BfRWYrKsqvAaOrIz5Mwa9phWEYA ",
    authDomain: "autogarden-f6476.firebaseapp.com",
    databaseURL: "https://autogarden-f6476.firebaseio.com",
    storageBucket: "autogarden-f6476.appspot.com"
};

firebase.initializeApp(config);

export const firebaseAuth = firebase.auth();
export const firebaseDB = firebase.database();