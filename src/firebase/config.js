// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore/lite';
import { getEnvironments } from "../helpers";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// console.log(process.env);
// console.log(import.meta.env);

const {
  VITE_APIKEY,
  VITE_AUTHDOMAIN,
  VITE_PROJECTID,
  VITE_STORAGEBUCKET,
  VITE_MESSAGINGSENDERID,
  VITE_APPID,
} = getEnvironments();



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: VITE_APIKEY,
  authDomain: VITE_AUTHDOMAIN,
  projectId: VITE_PROJECTID,
  storageBucket: VITE_STORAGEBUCKET,
  messagingSenderId: VITE_MESSAGINGSENDERID,
  appId: VITE_APPID,
};



// //testing
// const firebaseConfig = {
//   apiKey: "AIzaSyBIjK1pUqLe3M_kRoMicgFsbq6citUSFlI",
//   authDomain: "test-journal-7350e.firebaseapp.com",
//   projectId: "test-journal-7350e",
//   storageBucket: "test-journal-7350e.appspot.com",
//   messagingSenderId: "449943291173",
//   appId: "1:449943291173:web:1e242313de7264f53646cc"
// };


// const firebaseConfig = {
//   apiKey: "AIzaSyBIjK1pUqLe3M_kRoMicgFsbq6citUSFlI",
//   authDomain: "test-journal-7350e.firebaseapp.com",
//   projectId: "test-journal-7350e",
//   storageBucket: "test-journal-7350e.appspot.com",
//   messagingSenderId: "449943291173",
//   appId: "1:449943291173:web:1e242313de7264f53646cc",
//   measurementId: "G-4TPDT8T4BF"
// };


// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth(FirebaseApp);
export const firebaseBD = getFirestore(FirebaseApp);