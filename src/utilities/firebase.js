// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDNC-IWnHKU4ZoeWfj3V5dlCFFtERd83Yc",
  authDomain: "vue-full-1023.firebaseapp.com",
  projectId: "vue-full-1023",
  storageBucket: "vue-full-1023.appspot.com",
  messagingSenderId: "294250998721",
  appId: "1:294250998721:web:7a5d95a97157e341e61d40"
};

// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);
export const authService = firebase.auth();
