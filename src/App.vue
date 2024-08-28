
<script>
import NavbarComponent from './components/NavbarComponent.vue';
import DashboardComponent from './components/DashboardComponent.vue';
import StudentComponent from './components/StudentComponent.vue';
import CourseComponent from './components/CourseComponent.vue';
import SubjectComponent from './components/SubjectComponent.vue';
import FooterComponent from './components/FooterComponent.vue';

export default {
  components: {
    NavbarComponent,
    DashboardComponent,
    StudentComponent,
    CourseComponent,
    SubjectComponent,
    FooterComponent,
  },
  data() {
    return {
      currentComponent: null,
      counts: {
        students: 0,
        courses: 0,
        subjects: 0,
      },
    };
  },
  methods: {
    updateCounts({ students, courses, subjects }) {
      if (students !== undefined) this.counts.students = students;
      if (courses !== undefined) this.counts.courses = courses;
      if (subjects !== undefined) this.counts.subjects = subjects;
    },
    handleLogout() {
      // Handle logout logic here
      alert('Logged out successfully');
    },
  },
};
</script>


<template>
  <div id="app">
    <NavbarComponent @logout="handleLogout" />

    <div class="container mt-4">
      <DashboardComponent :counts="counts" @openComponent="currentComponent = $event" />
      <StudentComponent v-if="currentComponent === 'students'" @updateDashboard="updateCounts" />
      <CourseComponent v-if="currentComponent === 'courses'" @updateDashboard="updateCounts" />
      <SubjectComponent v-if="currentComponent === 'subjects'" @updateDashboard="updateCounts" />
    </div>
    <FooterComponent />
  </div>
</template>

<style>
@import url('https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css');
</style>
