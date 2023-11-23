import { getApp,getApps,initializeApp, } from "firebase/app";
import {getStorage} from 'firebase/storage'
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyBxER7JT-bTRFvFecZvjRzc1A99Y0wKiNM",
    authDomain: "luyentapcuoi1.firebaseapp.com",
    databaseURL: "https://luyentapcuoi1-default-rtdb.firebaseio.com",
    projectId: "luyentapcuoi1",
    storageBucket: "luyentapcuoi1.appspot.com",
    messagingSenderId: "572603436952",
    appId: "1:572603436952:web:8fccd4bcc0f4365f3225ed",
    measurementId: "G-DV3H5XZ8E7"
  };
  const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
  const firestore = getFirestore(app);
  const storage = getStorage(app);
  
  export { app, firestore, storage };