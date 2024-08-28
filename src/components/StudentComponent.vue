<template>
   <div>
    <h2 class="my-4">Student Management</h2>
    <button class="btn btn-success mb-3" @click="toggleForm">Add Student</button>

    <div v-if="showForm" class="mb-3">
      <h4>{{ editMode ? 'Edit Student' : 'Add Student' }}</h4>
      <form @submit.prevent="saveStudent">
        <div class="form-group">
          <label for="studentName">Student Name</label>
          <input
            type="text"
            class="form-control"
            id="studentName"
            v-model="newStudent.name"
            required
          />
        </div>
        <div class="form-group">
          <label for="studentEmail">Email</label>
          <input
            type="email"
            class="form-control"
            id="studentEmail"
            v-model="newStudent.email"
            required
          />
        </div>
        <button type="submit" class="btn btn-primary">{{ editMode ? 'Update' : 'Save' }}</button>
        <button type="button" class="btn btn-secondary" @click="resetForm">Cancel</button>
      </form>
    </div>

    <table v-if="students.length > 0" class="table table-striped table-bordered">
      <thead class="thead-dark">
        <tr>
          <th>ID</th>
          <th>Student Name</th>
          <th>Email</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="student in students" :key="student.studentId">
          <td>{{ student.studentId }}</td>
          <td>{{ student.name }}</td>
          <td>{{ student.email }}</td>
          <td>
            <button class="btn btn-warning btn-sm" @click="editStudent(student.studentId)">Edit</button>
            <button class="btn btn-danger btn-sm" @click="deleteStudent(student.studentId)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
    <div v-else class="alert alert-info">Loading students...</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      students: [],
      showForm: false,
      newStudent: {
        name: '',
        email: ''
      },
      editMode: false,
      editStudentId: null
    }
  },
  mounted() {
    this.fetchStudents()
  },
  methods: {
    fetchStudents() {
      fetch('http://localhost:7071/students') // Fetch existing students
        .then((response) => response.json())
        .then((data) => {
          this.students = data
          this.updateDashboard()
        })
        .catch((error) => {
          console.error('Error fetching students:', error)
        })
    },
    saveStudent() {
      const url = this.editMode 
        ? `http://localhost:7071/students/${this.editStudentId}`
        : 'http://localhost:7071/students';
      const method = this.editMode ? 'PUT' : 'POST';
      
      fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.newStudent)
      })
        .then((response) => response.json())
        .then((data) => {
          if (this.editMode) {
            const index = this.students.findIndex(student => student.studentId === this.editStudentId);
            this.$set(this.students, index, data); // Replace the old student data with the updated one
          } else {
            this.students.push(data); // Add the new student to the list
          }
          this.updateDashboard()
          this.resetForm(); // Reset the form
        })
        .catch((error) => {
          console.error('Error saving student:', error)
        })
    },
    editStudent(id) {
      const student = this.students.find(student => student.studentId === id);
      if (student) {
        this.newStudent = {
          name: student.name,
          email: student.email
        };
        this.editMode = true;
        this.editStudentId = id;
        this.showForm = true;
      } else {
        console.error(`Student with ID: ${id} not found.`);
      }
    },
    deleteStudent(id) {
      const studentIndex = this.students.findIndex(student => student.studentId === id);
      if (studentIndex !== -1) {
        if (confirm(`Are you sure you want to delete the student with ID: ${id}?`)) {
          fetch(`http://localhost:7071/students/${id}`, {
            method: 'DELETE'
          })
            .then(response => {
              if (response.ok) {
                this.students.splice(studentIndex, 1); // Remove the student from the array
                this.updateDashboard(); // Update the dashboard
              } else {
                console.error('Failed to delete student');
              }
            })
            .catch(error => {
              console.error('Error deleting student:', error);
            });
        }
      } else {
        console.error(`Student with ID: ${id} not found`);
      }
    },
    toggleForm() {
      this.resetForm();
      this.showForm = !this.showForm;
    },
    resetForm() {
      this.newStudent = { name: '', email: '' };
      this.editMode = false;
      this.editStudentId = null;
      this.showForm = false;
    },
    updateDashboard() {
      this.$emit('updateDashboard', { students: this.students.length });
    }
  }
}
</script>

<style scoped>
/* Add any styles specific to this component */
</style>
