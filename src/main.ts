import './main.css';
import { createApp } from 'vue';
import App from './App.vue';
import router from './routes/routes';
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
import 'primeicons/primeicons.css';



const app = createApp(App);

app.use(router);
app.use(PrimeVue, {
  theme: {
      preset: Aura,
  },
});


app.mount('#app');
