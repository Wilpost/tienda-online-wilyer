// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged
} from 'firebase/auth'
import { useUserControl } from '../../Hooks/usersControl'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBQ1Am-rmT_NMg7ruTFvlbtO5ZXhVD9nwA',
  authDomain: 'app-ecommerce-90105.firebaseapp.com',
  projectId: 'app-ecommerce-90105',
  storageBucket: 'app-ecommerce-90105.appspot.com',
  messagingSenderId: '226586596734',
  appId: '1:226586596734:web:be8ea097a8f0bc2901cf2f',
  measurementId: 'G-SMD9R847V2'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
export const auth = getAuth(app)
export const authStateChanged = onAuthStateChanged
auth.languageCode = 'es'
const provider = new GoogleAuthProvider()

export const login = async () => {
  try {
    const response = await signInWithPopup(auth, provider)
    console.log(response.user)
    return response.user
  } catch (error) {
    throw new Error(error)
  }
}

export const logout = () => {
  signOut(auth)
}
