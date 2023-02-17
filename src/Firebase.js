
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAbPXzXuAG8ZDU1mCTfKSnHW5YN2hhfgD4",
  authDomain: "ijbp-in.firebaseapp.com",
  projectId: "ijbp-in",
  storageBucket: "ijbp-in.appspot.com",
  messagingSenderId: "344389377864",
  appId: "1:344389377864:web:8f1ec8f3c7f033dabedd7d",
  measurementId: "G-PNYM4V4CWR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app