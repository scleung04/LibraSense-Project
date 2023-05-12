// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD8przWH-qRq6BlJqxGA3eoCMxX7b_VIjw",
  authDomain: "librasense-167b7.firebaseapp.com",
  databaseURL: "https://librasense-167b7-default-rtdb.firebaseio.com",
  projectId: "librasense-167b7",
  storageBucket: "librasense-167b7.appspot.com",
  messagingSenderId: "210325960319",
  appId: "1:210325960319:web:303362a0f45c901d7db14a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export {app};