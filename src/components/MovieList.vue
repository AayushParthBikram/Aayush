<template>
  <div>
    <input v-model="query" placeholder="Search for a movie..." />
    <button @click="search">Search</button>

    <div v-if="movies.length" class="row mt-4">
      <div v-for="movie in movies" :key="movie.id" class="col-md-4 mb-4">
        <div class="card">
          <img :src="`https://image.tmdb.org/t/p/w200${movie.poster_path}`" class="card-img-top" alt="Movie Poster" />
          <div class="card-body">
            <h5 class="card-title">{{ movie.title }}</h5>
            <p class="card-text">{{ movie.release_date }}</p>
            <p class="card-text">{{ movie.overview }}</p>
            <button @click="addToWatchlist(movie)" class="btn btn-primary w-100">Add to Watchlist</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { searchMovies } from '../services/movieService';
import axios from 'axios';
import Toastify from 'toastify-js';
import { useRouter } from 'vue-router';
import "toastify-js/src/toastify.css";  

const router = useRouter();
const query = ref('');
const movies = ref([]);

const search = async () => {
  movies.value = await searchMovies(query.value);
};

const addToWatchlist = async (movie) => {
  try {
    const token = localStorage.getItem('token');

    if (!token) {
      alert('Please log in to add movies to your watchlist.');
      return;
    }

    const watchlistItem = {
      movieId: movie.id,
      title: movie.title,
      posterImage: movie.poster_path,
      releaseDate: movie.release_date,
      synopsis: movie.overview,
    };

    await axios.post('http://localhost:7071/watchlist', watchlistItem, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    // Display Toastify notification
    Toastify({
      text: "Your movie has been added to the watchlist!",  // Simplified message
      duration: 5000,  // You can adjust the duration as needed
      close: true,
      gravity: "top",  // From wherever you want yu can give this Gravity
      position: "right",  // `left`, `center` or `right`
      style: {
        background: "#28a745",  // Updated to use `style.background`
      },
      stopOnFocus: true,
    }).showToast();

    // Redirect to Watchlist after the duration of the Toasty notification
    setTimeout(() => {
      router.push({ name: 'Watchlist' });
    }, 5000); // Match this duration with the Toast duration

  } catch (error) {
    console.error('Error adding movie to watchlist:', error);
    if (error.response && error.response.status === 401) {
      alert('Session expired. Please log in again.');
    } else {
      alert('An error occurred. Please try again later.');
    }
  }
};
</script>

<style scoped>
.card {
  width: 100%;
}

.card-img-top {
  width: 100%;
  height: auto;
}
</style>