<template>
    <li :class="{ completed: task.completed }" @click="toggle">
      {{ task.text }}
    </li>
  </template>
  
  <script setup>
  import { defineEmits } from 'vue';
  
  const props = defineProps({
    task: {
      type: Object,
      required: true
    }
  });
  
  const emit = defineEmits(['toggle-task']);
  
  const toggle = () => {
    emit('toggle-task');
  };
  </script>
  
  <style scoped>
  .completed {
    text-decoration: line-through;
    color: gray;
  }
  </style>
  