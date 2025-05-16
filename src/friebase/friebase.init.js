// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
import { getAuth } from "firebase/auth";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAid4ryB2T20BWLdCyardcFV6SUE4kV5Lo",
  authDomain: "practice-travel-guru-dbcf6.firebaseapp.com",
  projectId: "practice-travel-guru-dbcf6",
  storageBucket: "practice-travel-guru-dbcf6.firebasestorage.app",
  messagingSenderId: "319555283518",
  appId: "1:319555283518:web:450e05eda33e2784e9bf6f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app) 


// travel guru 