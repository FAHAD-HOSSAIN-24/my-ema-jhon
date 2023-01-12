// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1-29bDaGE_5HPHfZqtfjrQSCpA13LdQs",
  authDomain: "my-ema-jhon-513fa.firebaseapp.com",
  projectId: "my-ema-jhon-513fa",
  storageBucket: "my-ema-jhon-513fa.appspot.com",
  messagingSenderId: "187104556899",
  appId: "1:187104556899:web:34fb30b97b80e188b70556"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;