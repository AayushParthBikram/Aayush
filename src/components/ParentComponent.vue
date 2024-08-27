<template>
    <div>
      <h1>To-Do List</h1>
      <input v-model="newTask" @keyup.enter="addTask" placeholder="Add a new task" />
      <ul>
        <ChildComponent
          v-for="task in tasks"
          :key="task.id"
          :task="task"
          @toggle-task="toggleTask(task.id)"
        />
      </ul>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import ChildComponent from './ChildComponent.vue';
  
  const tasks = ref([
    { id: 1, text: 'Buy groceries', completed: false },
    { id: 2, text: 'Walk the dog', completed: false },
    { id: 3, text: 'Finish project', completed: false },
    { id: 4, text: 'Read a book', completed: false },
    { id: 5, text: 'Exercise', completed: false }
  ]);
  
  const newTask = ref('');  
  
  const addTask = () => {
    if (newTask.value.trim() === '') return;
    tasks.value.push({
      id: tasks.value.length + 1,
      text: newTask.value,
      completed: false
    });
    newTask.value = '';
  };
  
  const toggleTask = (taskId) => {
    const task = tasks.value.find(t => t.id === taskId);
    if (task) {
      task.completed = !task.completed;
    }
  };
  </script>
  