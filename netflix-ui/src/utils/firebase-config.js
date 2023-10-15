
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAi02Of1u4ra59Lp3SNKi7molTx5SOaw5w",
    authDomain: "netflix-clone-b9c9b.firebaseapp.com",
    projectId: "netflix-clone-b9c9b",
    storageBucket: "netflix-clone-b9c9b.appspot.com",
    messagingSenderId: "1077997458539",
    appId: "1:1077997458539:web:fe1cbe0d02b60717dc8d2e",
    measurementId: "G-DRHJ400GJB"
};


const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);