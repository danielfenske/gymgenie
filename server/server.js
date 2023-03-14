// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDR6YREA_YsXv32lKQJT7Vwo0pxb_mDVtg",
  authDomain: "gymgenie-app.firebaseapp.com",
  databaseURL: "https://gymgenie-app-default-rtdb.firebaseio.com",
  projectId: "gymgenie-app",
  storageBucket: "gymgenie-app.appspot.com",
  messagingSenderId: "690034347758",
  appId: "1:690034347758:web:18df592a3a4e854537adff",
  measurementId: "G-PN2RGE4D8K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);