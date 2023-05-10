import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth, GoogleAuthProvider } from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBOabpt8roLMZCUAIDI7GAnGw5_s7bLIQw",
  authDomain: "pf-react-411b2.firebaseapp.com",
  projectId: "pf-react-411b2",
  storageBucket: "pf-react-411b2.appspot.com",
  messagingSenderId: "1022488378868",
  appId: "1:1022488378868:web:a19d9ac6943a2e3404cda1",
  measurementId: "G-G3X96Q80F9"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()