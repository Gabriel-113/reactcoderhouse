import { initializeApp } from "firebase/app";
import {
    getFirestore, collection, getDocs, doc, getDoc, query, where, addDoc, writeBatch, documentId,
} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD2BMCvtvvZrmcrL2ZON9zXKgd4lvXaO9o",
    authDomain: "ecommerce-react-coder-1db90.firebaseapp.com",
    projectId: "ecommerce-react-coder-1db90",
    storageBucket: "ecommerce-react-coder-1db90.appspot.com",
    messagingSenderId: "901785827441",
    appId: "1:901785827441:web:22dd57df4066540ee983d0"
};

const FirebaseApp = initializeApp(firebaseConfig);