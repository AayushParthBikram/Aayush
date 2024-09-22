import { createRouter, createWebHistory } from 'vue-router';
import Login from './components/Login.vue';
import Signup from './components/Signup.vue';
import MovieList from './components/MovieList.vue';
import MovieDetails from './components/MovieDetails.vue';
import Watchlist from './components/Watchlist.vue';  // Import Watchlist component

const routes = [
  { path: '/', redirect: '/signup' },
  { path: '/login', component: Login },
  { path: '/signup', component: Signup },
  { path: '/movielist', component: MovieList },
  {path: '/movie/:id', name: 'MovieDetails', component: MovieDetails, props: true }, // Dynamic route for movie details
  { path: '/watchlist', name: 'Watchlist', component: Watchlist },// Add Watchlist route
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
