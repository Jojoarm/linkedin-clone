import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB5mGbb82ND4exmQ6v-qIN89BjhvJaTKtk",
    authDomain: "linkedin-clone-f77d0.firebaseapp.com",
    projectId: "linkedin-clone-f77d0",
    storageBucket: "linkedin-clone-f77d0.appspot.com",
    messagingSenderId: "306895537414",
    appId: "1:306895537414:web:ac13e7dea049af899b8a87",
    measurementId: "G-FYLCRPNJRE"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};