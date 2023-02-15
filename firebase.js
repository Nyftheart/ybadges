import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyD99Z7-Cxyjo16HWRU2i5HHM9nn2cClDh8",
    authDomain: "ybadges-997a2.firebaseapp.com",
    projectId: "ybadges-997a2",
    storageBucket: "ybadges-997a2.appspot.com",
    messagingSenderId: "309422908757",
    appId: "1:309422908757:web:397ec045eddc11afeffbdc",
    measurementId: "G-JWXTP9BHVV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);