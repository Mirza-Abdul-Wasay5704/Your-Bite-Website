import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyAbHYessEixFxb-P5ZbWXV-dzw6sA8IASo",
  authDomain: "your-bite.firebaseapp.com",
  projectId: "your-bite",
  storageBucket: "your-bite.firebasestorage.app",
  messagingSenderId: "364929886375",
  appId: "1:364929886375:web:d099562647f778229c9382",
  measurementId: "G-RS4N0WLTRX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
export const db = getFirestore(app);
export const storage = getStorage(app);
export const analytics = typeof window !== 'undefined' ? getAnalytics(app) : null;

export default app;
