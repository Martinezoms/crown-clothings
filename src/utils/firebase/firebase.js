import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBidp8wpuiGL6DrxnJWDJ3I3dFlzyt1w-8',
  authDomain: 'crown-clothing-db-d0bc8.firebaseapp.com',
  projectId: 'crown-clothing-db-d0bc8',
  storageBucket: 'crown-clothing-db-d0bc8.appspot.com',
  messagingSenderId: '248448908357',
  appId: '1:248448908357:web:b1fc9dfad115c3f324772c'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account'
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
