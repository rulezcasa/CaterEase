// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB97UiceiGKoLJSgLjZHg6j07bqe1Mwcl0",
  authDomain: "trial-27f04.firebaseapp.com",
  projectId: "trial-27f04",
  storageBucket: "trial-27f04.appspot.com",
  messagingSenderId: "746915205841",
  appId: "1:746915205841:web:b9ce0c088045ad4ba42bf0",
  measurementId: "G-2CZZLKGF7M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export {app,auth};