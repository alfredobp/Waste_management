// src/services/userService.ts
import { auth } from '@/firebase'; // Asegúrate de que esta sea la instancia de autenticación
import { db } from '@/firebase';   // Asegúrate de que esta sea la instancia de Firestore
import { doc, setDoc, getDoc, updateDoc } from 'firebase/firestore';

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


// Función para guardar o actualizar los datos del usuario
export const saveUserData = async (userData: Record<string, any>) => {
  // Obtén el usuario autenticado
  const currentUser = auth.currentUser;
  if (!currentUser) {
    throw new Error("No hay un usuario autenticado");
  }

  try {
    const userDocRef = doc(db, 'users', currentUser.uid);

    // Verifica si el documento ya existe
    const userDoc = await getDoc(userDocRef);

    if (userDoc.exists()) {
      // Si existe, actualiza los datos del usuario
      await updateDoc(userDocRef, userData);
      console.log("Datos del usuario actualizados con éxito");
    } else {
      // Si no existe, crea un nuevo documento con los datos del usuario
      await setDoc(userDocRef, {
        ...userData,
        uid: currentUser.uid,       // Agregar el UID del usuario
        email: currentUser.email,  // Agregar el correo electrónico
        createdAt: new Date(),     // Agregar fecha de creación
      });
      console.log("Datos del usuario guardados con éxito");
    }
  } catch (error) {
    console.error("Error al guardar los datos del usuario:", error);
    throw error;
  }
};