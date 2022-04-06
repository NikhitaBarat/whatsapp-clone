import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyBNtegDq1f2EA67GRujzYEJfHH2BnHuTwE",
    authDomain: "whatsapp-clone-b4703.firebaseapp.com",
    projectId: "whatsapp-clone-b4703",
    storageBucket: "whatsapp-clone-b4703.appspot.com",
    messagingSenderId: "307750363146",
    appId: "1:307750363146:web:14d64b064bb0f2d0dc7ff3",
    measurementId: "G-SJW5RTJH1L"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  export { auth, provider };
  export default db;
