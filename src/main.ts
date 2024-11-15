import './assets/css/satoshi.css';
import './assets/css/style.css';
import 'jsvectormap/dist/css/jsvectormap.min.css';
import 'flatpickr/dist/flatpickr.min.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import VueApexCharts from 'vue3-apexcharts';
import i18n from './i18n'; // Importa i18n
import App from './App.vue';
import router from './router';
import { auth } from './firebase';

let app: ReturnType<typeof createApp>;

// Escucha los cambios de autenticación antes de montar la aplicación
auth.onAuthStateChanged(() => {
    if (!app) {
        app = createApp(App);

        app.use(createPinia());
        app.use(router);
        app.use(VueApexCharts);
        app.use(i18n); // Usa i18n
        app.mount('#app');
    }
});
