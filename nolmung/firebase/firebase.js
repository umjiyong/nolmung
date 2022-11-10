// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getAnalytics} from 'firebase/analytics';
import {firebase} from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyB4S7ucFdgI76D8ujcXsMtlcHycxxBOWXs',
  authDomain: 'nolmung-chatting.firebaseapp.com',
  databaseURL:
    'https://nolmung-chatting-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'nolmung-chatting',
  storageBucket: 'nolmung-chatting.appspot.com',
  messagingSenderId: '919696272806',
  appId: '1:919696272806:web:fe6695dc157d55b8673367',
  measurementId: 'G-395JMR9ZZ0',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
