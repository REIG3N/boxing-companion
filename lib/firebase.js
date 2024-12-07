import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

console.log('Initializing Firebase...');

const firebaseConfig = {
  apiKey: "AIzaSyBRXlqppz48OuhIbcQkOyWDNOFX38fAW2c",
  projectId: "boxing-companion",
  storageBucket: "boxing-companion.firebasestorage.app",
  appId: "1:452019017297:android:8b4e4aa7779fc7473eca70"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log('Firebase initialized successfully');

// Get Auth instance
export const auth = getAuth(app);

// Get Firestore instance
export const db = getFirestore(app);

export default app;