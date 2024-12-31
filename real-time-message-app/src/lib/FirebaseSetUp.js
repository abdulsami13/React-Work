// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// console.log(import.meta.env.VITE_API_KEY)

const firebaseConfig = {

  apiKey: "AIzaSyCbbdh-p00zTjolxrC5lap936G-XIU8SWE",

  authDomain: "assignment-4-ca304.firebaseapp.com",

  projectId: "assignment-4-ca304",

  storageBucket: "assignment-4-ca304.appspot.com",

  messagingSenderId: "585474995296",

  appId: "1:585474995296:web:d10ec76b986b0f95d73f05",

  measurementId: "G-NVP0Q6W4K2"

};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

 const auth= getAuth();
const db = getFirestore();
const storage = getStorage();
console.log(auth,db,storage)
export {auth,storage,db}