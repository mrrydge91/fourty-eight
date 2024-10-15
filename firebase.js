// Import the functions you need from the SDKs you need
import { initializeApp, auth } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAFJ6tLqDonUMME86aGz4adXA78-Rj3HIE",
  authDomain: "fourty-eight-film.firebaseapp.com",
  projectId: "fourty-eight-film",
  storageBucket: "fourty-eight-film.appspot.com",
  messagingSenderId: "73080065607",
  appId: "1:73080065607:web:910312d9d06a2a5f52eb62",
  measurementId: "G-TF9XMXS1ES",
};

export const fbAuth = auth();

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
