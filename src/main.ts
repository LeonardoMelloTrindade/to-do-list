import './main.css';
import { createApp } from 'vue';
import App from './App.vue';
import router from './routes/routes';
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
import ToastService from 'primevue/toastservice';
import { createPinia } from 'pinia';
import ConfirmationService from 'primevue/confirmationservice';
import 'primeicons/primeicons.css';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(ToastService);
app.use(ConfirmationService);
app.use(PrimeVue, {
  theme: {
      preset: Aura,
  },
});


app.mount('#app');
