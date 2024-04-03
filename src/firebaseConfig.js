// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBlW1d1aQQ0OVWPlRiEDbaIzgZx_ez2JSo",
  authDomain: "gladys-blog-4ff8e.firebaseapp.com",
  projectId: "gladys-blog-4ff8e",
  storageBucket: "gladys-blog-4ff8e.appspot.com",
  messagingSenderId: "237915743899",
  appId: "1:237915743899:web:cfb0c594c7ed25a1e0883e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);