<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <h2 class="text-center mb-4">Login</h2>
        <form @submit.prevent="login">
          <div class="form-group mb-3">
            <label for="login-username">Username</label>
            <input
              v-model="username"
              id="login-username"
              name="username"
              class="form-control"
              placeholder="Username"
              required
              autocomplete="username"
            />
          </div>
          <div class="form-group mb-4">
            <label for="login-password">Password</label>
            <input
              v-model="password"
              id="login-password"
              name="password"
              type="password"
              class="form-control"
              placeholder="Password"
              required
              autocomplete="current-password"
            />
          </div>
          <div class="text-center">
            <button type="submit" class="btn btn-primary w-100">Login</button>
          </div>
        </form>
        <div class="text-center mt-3">
          <a href="#" @click.prevent="goToSignup" class="text-decoration-none">
            Don't have an account? <span class="text-primary">Sign Up Here</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

const username = ref('');
const password = ref('');
const router = useRouter();

const login = async () => {
  if (username.value.trim() === '' || password.value.trim() === '') {
    alert('Please fill in both fields.');
    return;
  }

  try {
    const response = await axios.post('http://localhost:7071/login', {
      username: username.value,
      password: password.value,
    });
    localStorage.setItem('token', response.data.token);
    alert('Login successful');
    router.push('/movielist');
  } catch (error) {
    console.error('Error logging in:', error.response ? error.response.data : error.message);
    alert('Login failed: ' + (error.response ? error.response.data : 'Please try again.'));
  }
};

const goToSignup = () => {
  router.push('/signup');
};
</script>

<style scoped>
.container {
  max-width: 400px;
}

h2 {
  color: #343a40;
}

.form-group label {
  font-weight: bold;
}

.btn-primary {
  background-color: #007bff;
  border-color: #007bff;
}

.text-primary {
  color: #007bff !important;
}

a.text-decoration-none {
  font-size: 0.9rem;
}

a.text-decoration-none:hover {
  text-decoration: underline;
}
</style>
