// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJg9YoxYxETOgEWx3YTNbFnJ-P_NkJLMY",
  authDomain: "musica-b3f20.firebaseapp.com",
  databaseURL: "https://musica-b3f20-default-rtdb.firebaseio.com",
  projectId: "musica-b3f20",
  storageBucket: "musica-b3f20.appspot.com",
  messagingSenderId: "450618539709",
  appId: "1:450618539709:web:7c9edfb3efc77318da41d4",
  measurementId: "G-Y71L76CJ9C"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const storage = getStorage(app)