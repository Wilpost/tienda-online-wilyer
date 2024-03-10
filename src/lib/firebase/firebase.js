// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDJ-IrKPvW7Deg3uZiNV07psRl1rTVeDsQ',
  authDomain: 'next-crud-ab0b5.firebaseapp.com',
  projectId: 'next-crud-ab0b5',
  storageBucket: 'next-crud-ab0b5.appspot.com',
  messagingSenderId: '1021853173317',
  appId: '1:1021853173317:web:c6fe918fbd44ca21cd052c'
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
