// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD9HTW95iGzlW0lNpH8hQQ50iXrh8x9s8E",
  authDomain: "classy-d5b7a.firebaseapp.com",
  projectId: "classy-d5b7a",
  storageBucket: "classy-d5b7a.appspot.com",
  messagingSenderId: "134395221449",
  appId: "1:134395221449:web:709b1d1569a0f067fa8418",
  measurementId: "G-Q40CZTFLN6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
