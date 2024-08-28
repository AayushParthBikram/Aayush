<template>
  <div>
    <h2 class="my-4">Course Management</h2>
    <button class="btn btn-success mb-3" @click="toggleForm">Add Course</button>

    <div v-if="showForm" class="mb-3">
      <h4>{{ editMode ? 'Edit Course' : 'Add Course' }}</h4>
      <form @submit.prevent="saveCourse">
        <div class="form-group">
          <label for="courseName">Course Name</label>
          <input
            type="text"
            class="form-control"
            id="courseName"
            v-model="newCourse.courseName"
            required
          />
        </div>
        <div class="form-group">
          <label for="courseDescription">Course Description</label>
          <input
            type="text"
            class="form-control"
            id="courseDescription"
            v-model="newCourse.courseDescription"
            required
          />
        </div>
        <button type="submit" class="btn btn-primary">{{ editMode ? 'Update' : 'Save' }}</button>
        <button type="button" class="btn btn-secondary" @click="resetForm">Cancel</button>
      </form>
    </div>

    <table v-if="courses.length > 0" class="table table-striped table-bordered">
      <thead class="thead-dark">
        <tr>
          <th>ID</th>
          <th>Course Name</th>
          <th>Course Description</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="course in courses" :key="course.courseId">
          <td>{{ course.courseId }}</td>
          <td>{{ course.courseName }}</td>
          <td>{{ course.courseDescription }}</td>
          <td>
            <button class="btn btn-warning btn-sm" @click="editCourse(course.courseId)">Edit</button>
            <button class="btn btn-danger btn-sm" @click="deleteCourse(course.courseId)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
    <div v-else class="alert alert-info">Loading courses...</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      courses: [],
      showForm: false,
      newCourse: {
        courseName: '',
        courseDescription: ''
      },
      editMode: false,
      editCourseId: null
    }
  },
  mounted() {
    this.fetchCourses()
  },
  methods: {
    fetchCourses() {
      fetch('http://localhost:7071/courses') // Fetch existing courses
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.text(); // Get response as text first
        })
        .then(text => {
          try {
            this.courses = JSON.parse(text); // Attempt to parse JSON
          } catch (error) {
            console.error('Response was not valid JSON:', text);
          }
        })
        .catch((error) => {
          console.error('Error fetching courses:', error)
        })
    },
    saveCourse() {
      const url = this.editMode 
        ? `http://localhost:7071/courses/${this.editCourseId}`
        : 'http://localhost:7071/courses';
      const method = this.editMode ? 'PUT' : 'POST';
      
      fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.newCourse)
      })
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.text(); // Get response as text first
        })
        .then(text => {
          try {
            const data = JSON.parse(text); // Attempt to parse JSON
            if (this.editMode) {
              const index = this.courses.findIndex(course => course.courseId === this.editCourseId);
              this.$set(this.courses, index, data); // Replace the old course data with the updated one
            } else {
              this.courses.push(data); // Add the new course to the list
            }
            this.updateDashboard();
            this.resetForm(); // Reset the form
          } catch (error) {
            console.error('Response was not valid JSON:', text);
          }
        })
        .catch((error) => {
          console.error('Error saving course:', error)
        })
    },
    editCourse(id) {
      const course = this.courses.find(course => course.courseId === id);
      if (course) {
        this.newCourse = {
          courseName: course.courseName,
          courseDescription: course.courseDescription
        };
        this.editMode = true;
        this.editCourseId = id;
        this.showForm = true;
      } else {
        console.error(`Course with ID: ${id} not found.`);
      }
    },
    deleteCourse(id) {
      const courseIndex = this.courses.findIndex(course => course.courseId === id);
      if (courseIndex !== -1) {
        if (confirm(`Are you sure you want to delete the course with ID: ${id}?`)) {
          fetch(`http://localhost:7071/courses/${id}`, {
            method: 'DELETE'
          })
            .then(response => {
              if (response.ok) {
                this.courses.splice(courseIndex, 1); // Remove the course from the array
                this.updateDashboard(); // Update the dashboard
              } else {
                console.error('Failed to delete course');
              }
            })
            .catch(error => {
              console.error('Error deleting course:', error);
            });
        }
      } else {
        console.error(`Course with ID: ${id} not found`);
      }
    },
    toggleForm() {
      this.resetForm();
      this.showForm = !this.showForm;
    },
    resetForm() {
      this.newCourse = { courseName: '', courseDescription: '' };
      this.editMode = false;
      this.editCourseId = null;
      this.showForm = false;
    },
    updateDashboard() {
      this.$emit('updateDashboard', { courses: this.courses.length });
    }
  }
}
</script>
