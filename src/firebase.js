// For Firebase JS SDK v7.20.0 and later, measurementId is optional
i
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

const firebaseConfig = {
    apiKey: "AIzaSyBNtegDq1f2EA67GRujzYEJfHH2BnHuTwE",
    authDomain: "whatsapp-clone-b4703.firebaseapp.com",
    projectId: "whatsapp-clone-b4703",
    storageBucket: "whatsapp-clone-b4703.appspot.com",
    messagingSenderId: "307750363146",
    appId: "1:307750363146:web:14d64b064bb0f2d0dc7ff3",
    measurementId: "G-SJW5RTJH1L"
  };

  const firebaseapp = firebase.initializeApp(firebaseConfig);
  const db = firebaseapp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;