import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyCHYcjKhL65Cb7OWqLmtpK6ZG9yXiHRe1o",
    authDomain: "proyecto-71-7e638.firebaseapp.com",
    projectId: "proyecto-71-7e638",
    storageBucket: "proyecto-71-7e638.appspot.com",
    messagingSenderId: "1058898676314",
    appId: "1:1058898676314:web:faaf1231058377b3c7a663"
  };
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
