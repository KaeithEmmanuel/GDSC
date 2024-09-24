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
    apiKey: "AIzaSyDzE7uoIGq9IWfeyQfsw6b-sV93TmBurms",
    authDomain: "gdgc-dff5c.firebaseapp.com",
    projectId: "gdgc-dff5c",
    storageBucket: "gdgc-dff5c.appspot.com",
    messagingSenderId: "748728060953",
    appId: "1:748728060953:web:142259ca58a7648d9b6e88",
    measurementId: "G-89T0LCDV8R"
  };

// Initialize Firebase

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
const analytics = getAnalytics(app);