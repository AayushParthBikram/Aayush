import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import 'vue-toast-notification/dist/theme-sugar.css'; // Import toast notification CSS
import VueToast from 'vue-toast-notification'; // Import Vue Toast Notification
import router from './router';

// Create the Vue app instance and use router and VueToast
const app = createApp(App);

// Use the VueToast plugin globally
app.use(VueToast);

// Mount the app
app.use(router).mount('#app');
