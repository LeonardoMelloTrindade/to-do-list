import { config } from '@vue/test-utils';
import ConfirmationService from 'primevue/confirmationservice';
import PrimeVue from 'primevue/config';
import { ToastService } from 'primevue';
import router from '@/routes/routes';

config.global.plugins = [PrimeVue, ConfirmationService, ToastService, router];