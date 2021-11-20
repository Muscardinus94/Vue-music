import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCH8w4o7_Mgcx4Mk6HP2WYtdAba8YH7BIg',
  authDomain: 'vue-music-3f72c.firebaseapp.com',
  projectId: 'vue-music-3f72c',
  storageBucket: 'vue-music-3f72c.appspot.com',
  messagingSenderId: '439263959564',
  appId: '1:439263959564:web:969cf005ce5b317497ec29',
  measurementId: 'G-M434S57NVD',
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

const usersCollection = db.collection('users');

export { auth, db, usersCollection };
