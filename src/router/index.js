import { createRouter, createWebHistory } from 'vue-router';
import DefaultView from '../views/DefaultView.vue'; // Import the new view component

const routes = [
  {
    path: '/',
    name: 'default',
    component: DefaultView // Route to DefaultView which includes ParentComponent
  }
  // Add other routes if needed
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;
