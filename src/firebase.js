import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth"

const firebaseConfig = {

  apiKey: "AIzaSyDdTdlsQ5A5pYshzX7pJxTW0COzwg0hhTQ",

  authDomain: "shadwa-group.firebaseapp.com",

  projectId: "shadwa-group",

  storageBucket: "shadwa-group.firebasestorage.app",

  messagingSenderId: "303500558635",

  appId: "1:303500558635:web:ef95e04768bc59f003856e",

  measurementId: "G-B2KQVMZSY5"

};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app); 
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();