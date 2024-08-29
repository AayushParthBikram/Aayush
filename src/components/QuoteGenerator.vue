<template>
    <div class="quote-generator">
      <div v-if="quote">
        <p>{{ quote.text }}</p>
        <p><strong>- {{ quote.author || 'Unknown' }}</strong></p>
      </div>
      <button @click="fetchQuote">Get New Quote</button>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  
  const quote = ref(null);
  
  const fetchQuote = async () => {
    try {
      const response = await fetch('https://api.quotable.io/random');
      const data = await response.json();
      quote.value = {
        text: data.content,
        author: data.author,
      };
    } catch (error) {
      console.error('Error fetching the quote:', error);
    }
  };
  
  onMounted(() => {
    fetchQuote();
  });
  </script>
  
  <style scoped>
  .quote-generator {
    text-align: center;
    margin-top: 50px;
  }
  
  p {
    font-size: 1.5rem;
    margin: 10px 0;
  }
  
  button {
    padding: 10px 20px;
    font-size: 1rem;
    cursor: pointer;
  }
  </style>
  