// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const FIREBASE_API_KEY = process.env.REACT_APP_FIREBASE_API_KEY;
const FIREBASE_PROJECT_ID = process.env.REACT_APP_FIREBASE_PROJECT_ID;

// Firebase configuration
const firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: `${FIREBASE_PROJECT_ID}.firebaseapp.com`,
  databaseURL: `https://${FIREBASE_PROJECT_ID}-default-rtdb.firebaseio.com/`,
  projectId: FIREBASE_PROJECT_ID,
  storageBucket: `${FIREBASE_PROJECT_ID}.appspot.com`,
  messagingSenderId: "500955216593",
  appId: "1:500955216593:web:732f3090e26089195323f0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get a reference to the database service 
export const database = getDatabase(app);
// export const databaseRef = database.child()