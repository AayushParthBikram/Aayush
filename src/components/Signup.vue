<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="card shadow-sm">
          <div class="card-body">
            <h2 class="text-center mb-4">Sign Up</h2>
            <form @submit.prevent="signup">
              <div class="form-group mb-3">
                <label for="signup-username" class="form-label">Username</label>
                <input
                  v-model="username"
                  id="signup-username"
                  name="username"
                  type="text"
                  class="form-control"
                  placeholder="Enter your username"
                  required
                  autocomplete="username"
                />
              </div>
              <div class="form-group mb-3">
                <label for="signup-password" class="form-label">Password</label>
                <input
                  v-model="password"
                  id="signup-password"
                  name="password"
                  type="password"
                  class="form-control"
                  placeholder="Enter your password"
                  required
                  autocomplete="new-password"
                />
              </div>
              <div class="text-center mb-3">
                <a @click.prevent="goToLogin" href="#" class="text-decoration-none">Already registered? Login Here</a>
              </div>
              <button type="submit" class="btn btn-primary w-100">Register</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

// Define reactive variables for username and password
const username = ref('');
const password = ref('');
const router = useRouter();

// Function to handle user signup
const signup = async () => {
  // Basic client-side validation
  if (username.value.trim() === '' || password.value.trim() === '') {
    alert('Please fill in both fields.');
    return;
  }

  try {
    // Send a POST request to register the user
    await axios.post('http://localhost:7071/register', {
      username: username.value,
      password: password.value,
    });

    // Alert the user about successful registration
    alert('User registered successfully');

    // Redirect to the login page after successful registration
    router.push('/login');
  } catch (error) {
    console.error('Error registering user:', error.response ? error.response.data : error.message);
    // Show a more specific error message if available
    alert('Registration failed: ' + (error.response ? error.response.data : 'Please try again.'));
  }
};

// Function to navigate to the login page
const goToLogin = () => {
  router.push('/login');
};
</script>

<style scoped>
.container {
  max-width: 500px;
}

@media (min-width: 768px) {
    .col-md-6 {
        flex: 0 0 auto;
        width: 94%;
    }
}

.card {
  border: none;
  border-radius: 10px;
}

.card-body {
  padding: 2rem;
}

.btn-primary {
  background-color: #007bff;
  border-color: #007bff;
}

.btn-primary:hover {
  background-color: #0056b3;
  border-color: #004085;
}

.form-control {
  border-radius: 5px;
}

.text-center a {
  color: #007bff;
}

.text-center a:hover {
  text-decoration: underline;
}

h2 {
  color: #333;
}
</style>
