// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCEEoIIVqGU0OiSWLghBbnJY1hDUngvnjc",
  authDomain: "ev---station---app.firebaseapp.com",
  projectId: "ev---station---app",
  storageBucket: "ev---station---app.appspot.com",
  messagingSenderId: "421969816066",
  appId: "1:421969816066:web:20fe3260abe7eb8041d51b",
  measurementId: "G-3LG1HTV9D7",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
