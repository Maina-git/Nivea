// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
import {getFirestore} from  "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCkO8veUzffRn5RCvE-4NsRqadhED67fQc",
  authDomain: "nivea-f8324.firebaseapp.com",
  projectId: "nivea-f8324",
  storageBucket: "nivea-f8324.appspot.com",
  messagingSenderId: "986985001527",
  appId: "1:986985001527:web:9affb7f70892b01ff3c5b2",
  measurementId: "G-PGC33L4BL6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const provider= new GoogleAuthProvider();
export const db=getFirestore(app);
const analytics = getAnalytics(app);
