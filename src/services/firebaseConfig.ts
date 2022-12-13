// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBlH05SOOlKSmrN991tWLx0tzyCIHuRONI",
  authDomain: "test-next-auth-dc939.firebaseapp.com",
  projectId: "test-next-auth-dc939",
  storageBucket: "test-next-auth-dc939.appspot.com",
  messagingSenderId: "529297397766",
  appId: "1:529297397766:web:d3cebd42c0701042778b87"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)