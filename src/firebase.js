import firebase from "firebase"
const firebaseConfig = {
    apiKey: "AIzaSyDyUSEnRdQ2x3R2CRHbzQYDCz8zJCK5cAI",
    authDomain: "whatsapp-clone-react-2b65d.firebaseapp.com",
    projectId: "whatsapp-clone-react-2b65d",
    storageBucket: "whatsapp-clone-react-2b65d.appspot.com",
    messagingSenderId: "14094837120",
    appId: "1:14094837120:web:50587af11a1ddf0447cd65",
    measurementId: "G-RCN866LHVV"
  };



const firebaseApp = firebase.initializeApp(firebaseConfig)

const db=firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider();

export {db, auth, provider}