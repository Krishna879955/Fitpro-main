// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDK2iDe5ZElfQtGdi50j_EAC7hvv7d3oO4",
  authDomain: "otp-demo-ab59c.firebaseapp.com",
  projectId: "otp-demo-ab59c",
  storageBucket: "otp-demo-ab59c.appspot.com",
  messagingSenderId: "2634578253",
  appId: "1:2634578253:web:dcde5bd4f41b5399555f04"
}
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);