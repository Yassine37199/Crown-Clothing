import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'



var firebaseConfig = {
    apiKey: "AIzaSyBZ6gasjX7j2X6ZJz0ogU3caYJ8kr-QEbE",
    authDomain: "crwn-gaming-db.firebaseapp.com",
    projectId: "crwn-gaming-db",
    storageBucket: "crwn-gaming-db.appspot.com",
    messagingSenderId: "753337094690",
    appId: "1:753337094690:web:7f1fbbb65a22fe3376b07b",
    measurementId: "G-7RM2T55P5Z"
  };



  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  export const auth = firebase.auth()
  export const firestore = firebase.firestore()

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ 'prompt' : 'select_account'})
  export const SignInWithGoogle = () => auth.signInWithPopup(provider)

  export default firebase