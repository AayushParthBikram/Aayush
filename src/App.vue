<script setup>
import { RouterView } from 'vue-router';
</script>

<template>
  <div id="app">
    <!-- Inline Header Structure with Logo -->
    <header>
      <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <!-- Use your logo here -->
            <img src="../src/images/QFX_Cinemas_Logo.png" alt="Movie Tracker" height="92" width="272" />
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <router-link class="nav-link active" aria-current="page" to="/">Home</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link active" aria-current="page" to="/login">Login</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link active" aria-current="page" to="/movielist">Movies</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link active" aria-current="page" to="/watchlist">Watch-list</router-link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>

    <!-- Content Section with offset to prevent content from going under the fixed header -->
    <div class="container content-section">
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
/* Fix the header to the top and adjust spacing for content below */
header {
  position: sticky;
  top: 0;
  z-index: 1030; /* Ensure the header stays above other elements */
}

.navbar-brand img {
  max-height: 50px;
  margin-left: -64px;
  object-fit: contain;
  object-position: center;
}

.content-section {
  padding-top: 120px; /* Add space for the fixed header */
}

.nav-link {
  font-weight: bold;
  
}

.navbar-light .navbar-nav .nav-link.active {
  color: #000;
  justify-content: space-around;
  margin: 2px 17px;
}

.navbar-light .navbar-nav .nav-link {
  color: rgba(0, 0, 0, 0.5);
}
</style>
