// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqzbtn27RiCoTgV0jTdZqJ4ajZeWWLbZ8",
  authDomain: "react-curso-f4c0c.firebaseapp.com",
  projectId: "react-curso-f4c0c",
  storageBucket: "react-curso-f4c0c.appspot.com",
  messagingSenderId: "275991643376",
  appId: "1:275991643376:web:f125e80bda8cf9f6392e35"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth(FirebaseApp);
export const firebaseBD = getFirestore(FirebaseApp);