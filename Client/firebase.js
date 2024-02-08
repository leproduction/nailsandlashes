// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCvpIth3Gf9CVfYcxEzC8S5CgC-wO54w54",
  authDomain: "personalportfolio2024.firebaseapp.com",
  projectId: "personalportfolio2024",
  storageBucket: "personalportfolio2024.appspot.com",
  messagingSenderId: "89862890290",
  appId: "1:89862890290:web:663ff4fb53c97b5272ed2b",
  measurementId: "G-D0VVYNVB2P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);