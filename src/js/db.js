import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/firebase-database'

// Firebase config
const firebaseConfig = {
    apiKey: "AIzaSyAZnZVxU996ZExmhpv99nr9L_MuMND6bhM",
    authDomain: "webinar-115f7.firebaseapp.com",
    databaseURL: "https://webinar-115f7.firebaseio.com",
    projectId: "webinar-115f7",
    storageBucket: "webinar-115f7.appspot.com",
    messagingSenderId: "725929204417",
    appId: "1:725929204417:web:a354d34398622446c39240",
    measurementId: "G-1GWGSKWETX",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


export default firebase.firestore();

