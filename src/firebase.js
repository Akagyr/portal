import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDW9gdanFztU1m7vbcXY-uKT8IknvsZx5I",
    authDomain: "portal-10165.firebaseapp.com",
    projectId: "portal-10165",
    storageBucket: "portal-10165.appspot.com",
    messagingSenderId: "8805702578",
    appId: "1:8805702578:web:c3ddf193c96477ed2a22ab"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);