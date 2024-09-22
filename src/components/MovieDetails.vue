<template>
  <div v-if="movie">
    <!-- Movie Title -->
    <h1 class="movie-title">
      <span class="movie-title-text">{{ movie.title }}</span>
    </h1>

    <!-- Release Date -->
    <p class="movie-release-date">
      <strong>Release Date - </strong>{{ movie.release_date }}
    </p>

    <div class="movie-info-row">
      <!-- Left Side: Movie Poster, Title, and Overview -->
      <div class="movie-poster-container">
        <a
          class="movie-poster-link"
          :href="`/title/${movie.id}/mediaviewer/?ref_=tt_ov_i`"
          aria-label="View ‘{{ movie.title }}’ Poster"
          target="_blank"
        >
          <div class="poster-wrapper">
            <img
              v-if="movie.poster_path"
              :src="`https://image.tmdb.org/t/p/w300${movie.poster_path}`"
              alt="Movie Poster"
              class="movie-poster-image"
            />
            <p v-else>No poster available</p>
            <!-- Handle missing poster -->
          </div>
        </a>

        <!-- Movie Overview -->
        <p class="movie-overview">
          <span class="overview-text">{{ movie.overview }}</span>
        </p>
      </div>

      <!-- Right Side: Movie Trailer and Links -->
      <div class="trailer-photo-container">
        <div class="trailer-wrapper">
          <!-- Display trailer iframe if trailerUrl is available -->
          <iframe
            v-if="trailerUrl"
            :src="trailerUrl"
            width="100%"
            height="446"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            title="Movie Trailer"
          ></iframe>

          <!-- Display message if trailerUrl is not available -->
          <div v-else>
            <p>No trailer available</p>
            <!-- Handle missing trailer -->
          </div>

          <div class="media-links">
            <!-- Update href with dynamic movie ID if possible -->
            <a
              class="media-link"
              aria-label="View Videos"
              :href="`/title/${movieId}/videogallery`"
            >
              <span>6 Videos</span>
            </a>
            <a
              class="media-link"
              aria-label="View Photos"
              :href="`/title/${movieId}/mediaviewer`"
            >
              <span>95 Photos</span>
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Display User Reviews -->
    <section v-if="sortedReviews.length">
      <h3>User Reviews</h3>
      <article
        v-for="review in sortedReviews"
        :key="review.id"
        class="review-article"
      >
        <strong>{{ review.username || "Anonymous User" }}</strong
        >: {{ review.rating }} stars
        <p>{{ review.content }}</p>
      </article>
    </section>

    <!-- Rating/Review Form -->
    <div>
      <h3>Rate and Review This Movie</h3>
      <form @submit.prevent="handleSubmitReview">
        <div>
          <label for="rating">Rating:</label>
          <select v-model="newReview.rating" id="rating" required>
            <option value="" disabled>Select rating</option>
            <option v-for="star in 5" :value="star" :key="star">
              {{ star }}
            </option>
          </select>
        </div>
        <div>
          <label for="comment">Review:</label>
          <textarea
            v-model="newReview.comment"
            id="comment"
            required
          ></textarea>
        </div>
        <button type="submit" :disabled="isSubmitting">Submit Review</button>
      </form>
    </div>
  </div>

  <!-- Loading state -->
  <div v-else>
    <p>Loading movie details...</p>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import {
  getExternalReviews,
  getMovieDetails,
  getMovieTrailer,
  getUserReviews,
} from "../services/movieService";
import { useToast } from "vue-toast-notification"; // Import toast notification library

const getToken = () => localStorage.getItem("token") || "";

const props = defineProps({
  id: String,
});

const movie = ref(null);
const reviews = ref([]); // Reviews from external API
const userSubmittedReviews = ref([]); // User reviews from your backend
const newReview = ref({
  rating: "",
  comment: "",
});
const trailerUrl = ref(null);
const isSubmitting = ref(false); // Disable the submit button when submitting a review

// Fetch movie details, reviews, and trailer
const fetchMovieDetails = async () => {
  try {
    movie.value = await getMovieDetails(props.id);
    reviews.value = await getExternalReviews(props.id); // Fetch reviews from external API
    userSubmittedReviews.value = await getUserReviews(props.id); // Fetch reviews from your backend
    trailerUrl.value = await getMovieTrailer(props.id); // Fetch trailer URL
  } catch (error) {
    console.error("Error fetching movie details:", error);
  }
};

// Handle review submission
const handleSubmitReview = async () => {
  try {
    const token = getToken();
    if (!token) {
      alert("Please log in to submit a review.");
      return;
    }

    isSubmitting.value = true;
    const decodedToken = JSON.parse(atob(token.split(".")[1]));
    const userId = decodedToken.userId;

    const review = {
      movieId: props.id,
      rating: newReview.value.rating,
      content: newReview.value.comment,
      userId: userId,
      username: decodedToken.username || "Anonymous User",
      date: new Date().toISOString(),
    };

    await submitReview(review, token);

    userSubmittedReviews.value.push(review); // Add the new review
    newReview.value.rating = "";
    newReview.value.comment = "";

    toast.success("Your review has successfully been submitted.");
  } catch (error) {
    console.error("Error submitting review:", error);
    if (error.response && error.response.status === 401) {
      alert("Session expired. Please log in again.");
    } else if (error.response && error.response.status === 403) {
      alert("You do not have permission to submit a review.");
    } else {
      alert("An error occurred. Please try again later.");
    }
  } finally {
    isSubmitting.value = false; // Re-enable button after submission
  }
};

const toast = useToast(); // Initialize toast for notifications

// Combine all reviews to be displayed
const sortedReviews = computed(() => {
  const allReviews = [...reviews.value, ...userSubmittedReviews.value];
  return allReviews.sort((a, b) => new Date(b.date) - new Date(a.date)); // Sort by date
});

onMounted(fetchMovieDetails);
</script>

<style scoped>
.movie-title {
  font-size: 2.5rem;
  font-weight: bold;
  color: #2144d1;
  margin-bottom: 10px;
  text-align: left;
}

.movie-title-text {
  font-size: 2rem;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.movie-release-date {
  font-size: 1.2rem;
  color: #eae4e4;
  background-color: #130f0f;
  border-radius: 10px;
  padding: 5px 10px;
  margin-left: 0;
  max-width: fit-content;
  white-space: nowrap;
}

.movie-info-row {
  display: flex;
  margin-top: 20px;
}

.movie-poster-container {
  flex: 1;
}

.movie-poster-link {
  display: block;
  position: relative;
}

.poster-wrapper {
  overflow: hidden;
}

.movie-poster-image {
  max-width: 100%;
  height: auto;
  border-radius: 10px;
  margin-left: -220px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.movie-overview {
  font-size: 1.05rem;
  line-height: 1.6;
  color: #333;
  margin-top: 90px;
  background-color: #f9f9f9;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  text-align: justify;
}

.overview-text {
  display: block;
}

.trailer-photo-container {
  flex: 1;
  padding-left: 20px;
  border-radius: 10px;
}

.trailer-wrapper {
  position: relative;
  border-radius: 10px;
}

.media-links {
  display: flex;
  justify-content: flex-start;
  gap: 10px;
  margin-top: 15px;
}

.media-link {
  padding: 8px 12px;
  border-radius: 5px;
  background-color: #2196f3;
  color: white;
  text-decoration: none;
  transition: background-color 0.3s;
}

.media-link:hover {
  background-color: #1976d2;
}

.review-article {
  margin-bottom: 15px;
}

form {
  margin-top: 20px;
}

label {
  font-size: 1rem;
  font-weight: bold;
}

textarea {
  width: 100%;
  height: 100px;
  margin-top: 10px;
  margin-bottom: 10px;
}

button {
  background-color: #4caf50;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button[disabled] {
  background-color: grey;
  cursor: not-allowed;
}
</style>
