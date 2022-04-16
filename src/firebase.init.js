// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC9JGKGyud-c_zXLCUiH5YeBp8S4gI9LqM",
    authDomain: "mister-bd-gym.firebaseapp.com",
    projectId: "mister-bd-gym",
    storageBucket: "mister-bd-gym.appspot.com",
    messagingSenderId: "510640426325",
    appId: "1:510640426325:web:ad9833dbc2cb52b47eb3dc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;