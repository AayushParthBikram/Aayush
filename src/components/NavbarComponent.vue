<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">Student Management App</a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a
            class="nav-link"
            href="#"
            @click="$emit('openComponent', null)"
            :class="{ active: currentComponent === null }"
            aria-current="page"
          >
            Home
          </a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            href="#"
            @click="$emit('openComponent', 'students')"
            :class="{ active: currentComponent === 'students' }"
            aria-current="page"
          >
            Dashboard
          </a>
        </li>
      </ul>
      <button class="btn btn-outline-danger ml-auto" @click="$emit('logout')">Logout</button>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavbarComponent',
  props: {
    currentComponent: {
      type: String,
      required: false,
    },
  },
};
</script>

<style scoped>
.nav-link.active {
  font-weight: bold;
}
</style>
