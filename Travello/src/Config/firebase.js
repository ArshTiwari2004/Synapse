import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

const firebaseConfig = { // Hide the env variables before pushing
    apiKey: "AIzaSyDblNAdgfR8tL8iPxmUJ3TmANXi4QyyVPE",
    authDomain: "travello-ac634.firebaseapp.com",
    projectId: "travello-ac634",
    storageBucket: "travello-ac634.appspot.com",
    messagingSenderId: "661569040017",
    appId: "1:661569040017:web:3a2e4faec35667fe3d9930"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const googleSignIn = () => signInWithPopup(auth, googleProvider);
export const registerWithEmail = (email, password) => createUserWithEmailAndPassword(auth, email, password);
export const loginWithEmail = (email, password) => signInWithEmailAndPassword(auth, email, password);
export const logout = () => signOut(auth);
