// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAu8TkJ0sw_n59LAqTBJs-5QB3HAKvjkUk",
  authDomain: "vite-contact-8c2d3.firebaseapp.com",
  projectId: "vite-contact-8c2d3",
  storageBucket: "vite-contact-8c2d3.appspot.com",
  messagingSenderId: "653210587895",
  appId: "1:653210587895:web:7ee4017d7bdfea8eabf9f2",
  measurementId: "G-8TTK86LPVB",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db =   getFirestore(app);
