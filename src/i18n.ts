import { createI18n } from 'vue-i18n';

// Define los mensajes de traducción para los idiomas disponibles
const messages = {
  en: {
    welcome: 'Welcome',
    login: 'Login',
    email: 'Email',
    password: 'Password',
    signIn: 'Sign In',
  },
  es: {
    welcome: 'Bienvenido',
    login: 'Iniciar sesión',
    email: 'Correo electrónico',
    password: 'Contraseña',
    signIn: 'Iniciar sesión',
  },
};

// Configuración de i18n
const i18n = createI18n({
  locale: 'en', // Idioma predeterminado
  fallbackLocale: 'en', // Idioma de respaldo
  messages,
});

export default i18n;
