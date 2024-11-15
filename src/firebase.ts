// src/firebase.ts
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// Configuración de Firebase (reemplaza con tus datos de configuración)
const firebaseConfig = {
  apiKey: "AIzaSyCucWqOxysavQUqRjJJ0ER7-NhMVxNJOAo",
  authDomain: "evident-trees-295915.firebaseapp.com",
  projectId: "evident-trees-295915",
  storageBucket: "evident-trees-295915.firebasestorage.app",
  messagingSenderId: "408911514958",
  appId: "1:408911514958:web:d214a2cb3ced33218a221f"
}
// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Exporta la instancia de autenticación
const auth = getAuth(app);
export { auth };
export const db = getFirestore(app);