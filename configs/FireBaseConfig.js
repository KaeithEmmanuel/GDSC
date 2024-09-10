// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBsa4DBZrCRBhXF1htHLsgofvcVV5WDwPY",
  authDomain: "ai-travelplanner-c8172.firebaseapp.com",
  projectId: "ai-travelplanner-c8172",
  storageBucket: "ai-travelplanner-c8172.appspot.com",
  messagingSenderId: "924310887574",
  appId: "1:924310887574:web:ad844960114feef17076b7",
  measurementId: "G-WEBM89DCVB"
};

// Initialize Firebase

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
const analytics = getAnalytics(app);