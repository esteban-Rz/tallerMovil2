// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getFirestore } from "firebase/firestore";
// ❌ Quitamos getAnalytics — no es compatible con React Native / Expo

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYcg044JrVhvjOaKh8nFAe5cxNLgkGAQE",
  authDomain: "taller2-27390.firebaseapp.com",
  projectId: "taller2-27390",
  storageBucket: "taller2-27390.firebasestorage.app",
  messagingSenderId: "123469753719",
  appId: "1:123469753719:web:6e3f9cc96336bc77530572",
  // measurementId ya no es necesario si no usamos Analytics
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Auth con persistencia en AsyncStorage (para que la sesión no se pierda)
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

// exporto la app
export default app;
export const db = getFirestore(app);