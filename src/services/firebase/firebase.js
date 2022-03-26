import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: process.env.REACT_APP_ApiKey,
    authDomain: process.env.REACT_APP_AuthDomain,
    projectId: process.env.REACT_APP_ProjectId,
    storageBucket: process.env.REACT_APP_StorageBucket,
    messagingSenderId: process.env.REACT_APP_MessagingSenderId,
    appId: process.env.REACT_APP_AppId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const firestoreDb = getFirestore(app);