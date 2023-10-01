import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAE0GuTr7nkvIsoChpT-5sI4SCxAn0haL4",
  authDomain: "blog-2-6c133.firebaseapp.com",
  projectId: "blog-2-6c133",
  storageBucket: "blog-2-6c133.appspot.com",
  messagingSenderId: "864351044930",
  appId: "1:864351044930:web:5ed48b7a37cdc24ba2b4db",
  measurementId: "G-BVH9KNC4MG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
