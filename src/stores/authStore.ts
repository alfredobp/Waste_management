// src/stores/authStore.ts
import { defineStore } from 'pinia';
import { ref } from 'vue';
import { auth, db } from '@/firebase'; // Importa las instancias de Firebase y Firestore
import { onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';

export const useAuthStore = defineStore('auth', () => {
  const isAuthenticated = ref(false);
  const userId = ref<string | null>(null);
  const userData = ref<any | null>(null); // Para almacenar los datos del usuario

  // Función para obtener datos del usuario desde Firestore
  const fetchUserData = async (uid: string) => {
    try {
      const userDocRef = doc(db, 'users', uid);
      const userDoc = await getDoc(userDocRef);
      if (userDoc.exists()) {
        userData.value = userDoc.data();
      } else {
        console.error('No se encontraron datos para este usuario');
        userData.value = null;
      }
    } catch (error) {
      console.error('Error al obtener los datos del usuario:', error);
      userData.value = null;
    }
  };

  // Detecta cambios en el estado de autenticación
  onAuthStateChanged(auth, async (user) => {
    if (user) {
      isAuthenticated.value = true;
      userId.value = user.uid; // Almacena el UID del usuario autenticado
      await fetchUserData(user.uid); // Obtén y almacena los datos del usuario
    } else {
      isAuthenticated.value = false;
      userId.value = null;
      userData.value = null; // Limpia los datos del usuario al desloguear
    }
  });

  return { isAuthenticated, userId, userData };
});
