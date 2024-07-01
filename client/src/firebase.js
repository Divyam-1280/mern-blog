// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY, // we do this as we are using vite instead of firebase to make our react app
  authDomain: "mern-blog-fa704.firebaseapp.com",
  projectId: "mern-blog-fa704",
  storageBucket: "mern-blog-fa704.appspot.com",
  messagingSenderId: "366062082459",
  appId: "1:366062082459:web:b946327cf4e2961b0e293e",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
