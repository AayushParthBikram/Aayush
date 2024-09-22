import axios from 'axios';

const API_KEY = 'ae47fe82fda1ca5cfce1e702122c63af'; // TMDb API Key
const BASE_URL = 'https://api.themoviedb.org/3';
const YOUTUBE_API_KEY = 'AIzaSyDLOCCiMVc22ReQ_t9cTLv9VxQ48vkOc24'; // YouTube Data API key

// Fetch movie details from TMDb API using axios
export async function getMovieDetails(movieId) {
  try {
    const response = await axios.get(`${BASE_URL}/movie/${movieId}`, {
      params: {
        api_key: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching movie details:', error.response ? error.response.data : error.message);
    throw error;
  }
}

// Fetch movie trailer from YouTube Data API using axios
export async function getMovieTrailer(movieTitle, movieId) {
  try {
    const youtubeQuery = `${encodeURIComponent(movieTitle)} trailer ${movieId}`;
    
    const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
      params: {
        key: YOUTUBE_API_KEY,
        part: 'snippet',
        q: youtubeQuery,
        type: 'video',
        maxResults: 5,
      },
    });

    const items = response.data.items;

    // Filter for videos that are likely official trailers
    const trailer = items.find(item => {
      const title = item.snippet.title.toLowerCase();
      return title.includes('official trailer') || title.includes('trailer') || title.includes('teaser') || title.includes('exclusive');
    });

    const selectedTrailer = trailer || items[0]; // Fall back to the first result if no official trailer is found

    if (selectedTrailer) {
      return `https://www.youtube.com/embed/${selectedTrailer.id.videoId}`;
    } else {
      console.warn('No trailer found on YouTube for this movie');
      return null;
    }
  } catch (error) {
    console.error('Error fetching movie trailer:', error.response ? error.response.data : error.message);
    throw error;
  }
}

// Fetch movie reviews from TMDb API using axios
export async function getExternalReviews(movieId) {
  try {
    const response = await axios.get(`${BASE_URL}/movie/${movieId}/reviews`, {
      params: {
        api_key: API_KEY,
      },
    });
    return response.data.results;
  } catch (error) {
    console.error('Error fetching external reviews:', error.response ? error.response.data : error.message);
    throw error;
  }
}

// Fetch user reviews from your own backend using axios
export async function getUserReviews(movieId) {
  try {
    const response = await axios.get('http://localhost:7071/reviews', {
      params: {
        movieId,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching user reviews:', error.response ? error.response.data : error.message);
    throw error;
  }
}

// Submit a new review to your backend using axios
export async function submitReview(review, token) {
  try {
    const response = await axios.post('http://localhost:7071/reviews', review, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error submitting review:', error.response ? error.response.data : error.message);
    throw error;
  }
}

// Fetch search results for movies using axios
export async function searchMovies(query) {
  try {
    const response = await axios.get(`${BASE_URL}/search/movie`, {
      params: {
        api_key: API_KEY,
        query: encodeURIComponent(query),
      },
    });
    return response.data.results;
  } catch (error) {
    console.error('Error searching for movies:', error.response ? error.response.data : error.message);
    throw error;
  }
}
