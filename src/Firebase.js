import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCWb5HjH5HM7XkI0lS9ythsLAY9rzpN9YM",
    authDomain: "netflix-clone-28ef8.firebaseapp.com",
    projectId: "netflix-clone-28ef8",
    storageBucket: "netflix-clone-28ef8.appspot.com",
    messagingSenderId: "242853104186",
    appId: "1:242853104186:web:6942791b5180c50f930303"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();


  export { auth };
  export default db;