// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getPerformance } from "firebase/performance";

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

// Initialize analytics
const analytics = getAnalytics(app);
// TODO: look into this and understand what it's doing
// https://firebase.google.com/docs/analytics/get-started?platform=web
logEvent(analytics, 'notification_received');

// Initialize Firebase Authentication and get a reference to the service
// https://firebase.google.com/docs/auth/web/start
const auth = getAuth(app);

// Initialize Performance Monitoring and get a reference to the service
// https://firebase.google.com/docs/perf-mon/get-started-web
const perf = getPerformance(app);
