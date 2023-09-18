import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyA4wUgWhwTMUp7FZnYJY_rDmuG5y5O9K-k",
  authDomain: "openinappassignmentdash.firebaseapp.com",
  projectId: "openinappassignmentdash",
  storageBucket: "openinappassignmentdash.appspot.com",
  messagingSenderId: "784292606421",
  appId: "1:784292606421:web:c45eb679a0e8385e764d5c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getAuth(app);
export const provider = new GoogleAuthProvider();