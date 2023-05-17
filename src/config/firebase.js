// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDF0rgEkGWKSqO6ouwyOIGemCV3eeiDVfc",
  authDomain: "info-felipegabriel.firebaseapp.com",
  projectId: "info-felipegabriel",
  storageBucket: "info-felipegabriel.appspot.com",
  messagingSenderId: "65542275206",
  appId: "1:65542275206:web:4990a724dd54cc9fbc1107",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
