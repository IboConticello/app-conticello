import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAeiXZbyrsosVy-OaKKWX62m4a4WLt077s",
    authDomain: "coderhouse-react-24925.firebaseapp.com",
    projectId: "coderhouse-react-24925",
    storageBucket: "coderhouse-react-24925.appspot.com",
    messagingSenderId: "800551992622",
    appId: "1:800551992622:web:daa51bcff8b44f4e7e0ebf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const firestoreDb = getFirestore(app);