import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config ={
    apiKey: "AIzaSyCWLISrzNSgBy_SCiifJGHPcucQ6VUNHLs",
    authDomain: "crwn-22a83.firebaseapp.com",
    databaseURL: "https://crwn-22a83.firebaseio.com",
    projectId: "crwn-22a83",
    storageBucket: "crwn-22a83.appspot.com",
    messagingSenderId: "620512828315",
    appId: "1:620512828315:web:aabd0354ab942aff291f3e",
    measurementId: "G-WSCGL78XFR"
  };


firebase.initializeApp(config);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({prompt:'select_account'});

export const signInWithGoogleMethod =()=> auth.signInWithPopup(provider);

export default firebase ;







