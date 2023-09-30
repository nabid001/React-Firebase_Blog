// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQj_pQk3WtK2Dc3arQfQP4uiZw4ONs4TI",
  authDomain: "react-blog-53052.firebaseapp.com",
  projectId: "react-blog-53052",
  storageBucket: "react-blog-53052.appspot.com",
  messagingSenderId: "821977575066",
  appId: "1:821977575066:web:c87ac1b5c139cf7f077923",
  measurementId: "G-S24SYLWP31",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
