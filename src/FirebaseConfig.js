// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAgDRBeneSXnnBTIXtWm1VSSYKGDFr42ks",
  authDomain: "fir-auth-a3bd5.firebaseapp.com",
  projectId: "fir-auth-a3bd5",
  storageBucket: "fir-auth-a3bd5.firebasestorage.app",
  messagingSenderId: "204369367907",
  appId: "1:204369367907:web:6ffd2f3ce4e2998eadf956"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider, signInWithPopup, signOut, onAuthStateChanged };