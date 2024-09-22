<template>
  <div class="container mt-5">
    <h2 class="text-center mb-4">Your Watchlist</h2>
    <div v-if="watchlist.length" class="row">
      <div v-for="movie in watchlist" :key="movie.id" class="col-md-4 mb-4">
        <div class="card">
          <img :src="`https://image.tmdb.org/t/p/w200${movie.posterImage}`" class="card-img-top" alt="Movie Poster" />
          <div class="card-body">
            <h5 class="card-title">{{ movie.title }}</h5>
            <button @click="removeFromWatchlist(movie.movieId)" class="btn btn-danger w-100 mt-2">Remove</button>
            <button @click="$router.push({ name: 'MovieDetails', params: { id: movie.movieId } })" class="btn btn-primary w-100 mt-2">Rating & Review</button>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="text-center">
      <p>Your watchlist is currently empty.</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

// Replace this with the actual method of getting the token
const getToken = () => localStorage.getItem('token') || '';

const watchlist = ref([]);

const fetchWatchlist = async () => {
  try {
    const token = getToken();
    const response = await axios.get('http://localhost:7071/watchlist', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    watchlist.value = response.data;
  } catch (error) {
    console.error('Error fetching watchlist:', error);
  }
};

const removeFromWatchlist = async (movieId) => {
  try {
    const token = getToken();
    await axios.delete(`http://localhost:7071/watchlist/${movieId}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    watchlist.value = watchlist.value.filter(item => item.movieId !== movieId);
    alert('Movie removed from watchlist successfully');
  } catch (error) {
    console.error('Error removing movie from watchlist:', error);
  }
};

// Fetch the watchlist when the component is mounted
onMounted(fetchWatchlist);
</script>

<style scoped>
.container {
  max-width: 800px;
}

.card {
  width: 100%;
}

.card-img-top {
  width: 100%;
  height: auto;
}

h2 {
  color: #343a40;
}
</style>
