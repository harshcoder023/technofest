import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCOVwkzMsAMpqgGHbDxDC2J571PuvOiEGQ",
  authDomain: "technofest-registration.firebaseapp.com",
  projectId: "technofest-registration",
  storageBucket: "technofest-registration.appspot.com",
  messagingSenderId: "131330602795",
  appId: "1:131330602795:web:142fa8f951a57d4581776e",
  measurementId: "G-BXSX40E859",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
