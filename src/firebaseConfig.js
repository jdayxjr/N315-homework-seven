// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDITC45vM2YELRwXJ8EtlMmLkjoKr-LHyc",
    authDomain: "n315-homework-seven.firebaseapp.com",
    projectId: "n315-homework-seven",
    storageBucket: "n315-homework-seven.firebasestorage.app",
    messagingSenderId: "210932020285",
    appId: "1:210932020285:web:276cb855a835e1bf65a654",
    measurementId: "G-M5VLZZ6011"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);