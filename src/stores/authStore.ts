// src/stores/authStore.ts
import { defineStore } from 'pinia';
import { ref } from 'vue';
import { auth } from '@/firebase'; // Importa tu instancia de Firebase aquí
import { onAuthStateChanged } from 'firebase/auth';

export const useAuthStore = defineStore('auth', () => {
  const isAuthenticated = ref(false);

  // Detecta cambios en el estado de autenticación
  onAuthStateChanged(auth, (user) => {
    isAuthenticated.value = !!user;
  });

  return { isAuthenticated };
});
