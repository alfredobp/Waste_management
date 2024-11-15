// src/services/userService.ts
import { auth } from '@/firebase'; // Asegúrate de que esta sea la instancia de autenticación
import { db } from '@/firebase';   // Asegúrate de que esta sea la instancia de Firestore
import { doc, getDoc } from 'firebase/firestore';

export const getUserData = async () => {
  // Obtén el usuario autenticado
  const currentUser = auth.currentUser;
  if (!currentUser) {
    throw new Error("No hay un usuario autenticado");
  }

  try {
    // Obtén el documento del usuario en Firestore usando el UID
    const userDocRef = doc(db, 'users', currentUser.uid);
    const userDoc = await getDoc(userDocRef);

    if (userDoc.exists()) {
      return userDoc.data(); // Devuelve los datos del usuario
    } else {
      throw new Error("No se encontraron datos para este usuario");
    }
  } catch (error) {
    console.error("Error al obtener los datos del usuario:", error);
    throw error;
  }
};