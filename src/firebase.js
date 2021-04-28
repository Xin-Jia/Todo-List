import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyC6cN1D9SPysYBRy_GAr6Aimna4-dGa6B4",
    authDomain: "todoapp-40a46.firebaseapp.com",
    projectId: "todoapp-40a46",
    storageBucket: "todoapp-40a46.appspot.com",
    messagingSenderId: "908526150304",
    appId: "1:908526150304:web:ea85a21f69924643319fc5"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { db };