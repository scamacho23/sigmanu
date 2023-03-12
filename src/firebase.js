import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJRjQJyS3VJOFdbys-IIIdB5MluIO186o",
  authDomain: "sigmanu-a8f73.firebaseapp.com",
  databaseURL: "https://sigmanu-a8f73-default-rtdb.firebaseio.com",
  projectId: "sigmanu-a8f73",
  storageBucket: "sigmanu-a8f73.appspot.com",
  messagingSenderId: "58678668338",
  appId: "1:58678668338:web:dbdbb2af7881e863c2602b",
  measurementId: "G-HXYPGDJ8MJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
const analytics = getAnalytics(app);