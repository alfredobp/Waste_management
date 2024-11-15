<script setup lang="ts">
import DefaultAuthCard from '@/components/Auths/DefaultAuthCard.vue';
import InputGroup from '@/components/Auths/InputGroup.vue';
import BreadcrumbDefault from '@/components/Breadcrumbs/BreadcrumbDefault.vue';
import DefaultLayout from '@/layouts/DefaultLayout.vue';

import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { auth } from '@/firebase';
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

// Estado para el título de la página
const pageTitle = ref('Sign In');

// Estado para el formulario
const email = ref('');
const password = ref('');
const errorMessage = ref('');

// Router para redirigir al usuario después del inicio de sesión exitoso
const router = useRouter();

// Función para iniciar sesión con correo electrónico y contraseña
const handleSignIn = async (event: Event) => {
  event.preventDefault();
  errorMessage.value = '';
console.log(email.value)

  try {
    await signInWithEmailAndPassword(auth, email.value, password.value);
    // Redirigir después del inicio de sesión exitoso
    router.push('/');
  } catch (error) {
    console.log(error)
    errorMessage.value = 'Error al iniciar sesión. Por favor, revisa tus credenciales.';
  }
};

// Función para iniciar sesión con Google
const handleGoogleSignIn = async () => {
  const provider = new GoogleAuthProvider();
  errorMessage.value = '';

  try {
    await signInWithPopup(auth, provider);
    // Redirigir después del inicio de sesión exitoso
    router.push('/dashboard');
  } catch (error) {
    errorMessage.value = 'Error al iniciar sesión con Google.';
  }
};
</script>

<template>
  <DefaultLayout>
    <!-- Breadcrumb Start -->
    <BreadcrumbDefault :pageTitle="pageTitle" />
    <!-- Breadcrumb End -->

    <DefaultAuthCard subtitle="Start for free" title="Sign In to TailAdmin">
      <form @submit="handleSignIn">
    
        <InputGroup
        label="Email"
      type="email"
      placeholder="Enter your email"
      v-model="email"
        >
          <!-- SVG Icon for email -->
        </InputGroup>

        <InputGroup
          label="Password"
          type="password"
          placeholder="6+ Characters, 1 Capital letter"
          v-model="password"
        >
          <!-- SVG Icon for password -->
        </InputGroup>

        <!-- Display error message if there is any -->
        <div v-if="errorMessage" class="text-red-500 mb-4">{{ errorMessage }}</div>

        <div class="mb-5 mt-6">
          <input
            type="submit"
            value="Sign In"
            class="w-full cursor-pointer rounded-lg border border-primary bg-primary p-4 font-medium text-white transition hover:bg-opacity-90"
          />
        </div>

        <button
          @click.prevent="handleGoogleSignIn"
          class="flex w-full items-center justify-center gap-3.5 rounded-lg border border-stroke bg-gray p-4 font-medium hover:bg-opacity-70 dark:border-strokedark dark:bg-meta-4 dark:hover:bg-opacity-70"
        >
          <span>
            <!-- SVG Icon for Google -->
          </span>
          Sign in with Google
        </button>

        <div class="mt-6 text-center">
          <p class="font-medium">
            Don’t have any account?
            <router-link to="/auth/signup" class="text-primary">Sign up</router-link>
          </p>
        </div>
      </form>
    </DefaultAuthCard>
  </DefaultLayout>
</template>
