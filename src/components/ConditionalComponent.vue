<template>
    <div>
      <!-- v-if / v-else / v-else-if Example -->
      <p v-if="isLoggedIn">Welcome back, user!</p>
      <p v-else-if="isGuest">Welcome, guest!</p>
      <p v-else>Please log in.</p>
  
      <!-- v-show Example -->
      <button @click="toggleVisibility">Toggle Secret Message</button>
      <p v-show="isVisible">This is a secret message!</p>
  
      <!-- v-for Example -->
      <ul>
        <li v-for="(item, index) in items" :key="index">{{ item }}</li>
      </ul>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  // Data properties
  const isLoggedIn = ref(false);
  const isGuest = ref(false);
  const isVisible = ref(false);
  const items = ref(['Item 1', 'Item 2', 'Item 3']);
  
  // Methods
  const toggleVisibility = () => {
    isVisible.value = !isVisible.value;
  };
  </script>
  
  <style scoped>
  button {
    margin-bottom: 20px;
  }
  </style>
  