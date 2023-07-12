// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyCAQ6gJY5cB8tly1NCiKggQJs6Vy43-o8s",
	authDomain: "its-gujrat.firebaseapp.com",
	projectId: "its-gujrat",
	storageBucket: "its-gujrat.appspot.com",
	messagingSenderId: "465936599863",
	appId: "1:465936599863:web:ca26edb9448649499428b2",
	measurementId: "G-HJD17KEDND",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
