// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// console.log(import.meta.env.VIT_OK)

const firebaseConfig = {
  apiKey: "AIzaSyBtsNzMoEknV8kQPqoupVlLvmmEri8BIsM",
  authDomain: "assignment-10-aaf42.firebaseapp.com",
  projectId: "assignment-10-aaf42",
  storageBucket: "assignment-10-aaf42.appspot.com",
  messagingSenderId: "273645961484",
  appId: "1:273645961484:web:af8e1613652631d8884929"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app