import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyCTSCMMh4VqxerCm2Pkb_EFfjOLt66RmFA",
  authDomain: "emart-c01c8.firebaseapp.com",
  projectId: "emart-c01c8",
  storageBucket: "emart-c01c8.appspot.com",
  messagingSenderId: "278481256943",
  appId: "1:278481256943:web:f311001b3fb5e7e680b61a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;