<template>
    <div>
    <h2 class="my-4">Subject Management</h2>
    <button class="btn btn-success mb-3" @click="toggleForm">Add Subject</button>

    <div v-if="showForm" class="mb-3">
      <h4>{{ editMode ? 'Edit Subject' : 'Add Subject' }}</h4>
      <form @submit.prevent="saveSubject">
        <div class="form-group">
          <label for="subjectName">Subject Name</label>
          <input
            type="text"
            class="form-control"
            id="subjectName"
            v-model="newSubject.subjectName"
            required
          />
        </div>
        <div class="form-group">
          <label for="subjectDescription">Subject Description</label>
          <input
            type="text"
            class="form-control"
            id="subjectDescription"
            v-model="newSubject.subjectDescription"
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
          <th>Subject Name</th>
          <th>Subject Description</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="subject in subjects" :key="subject.subjectId">
          <td>{{ subject.subjectId }}</td>
          <td>{{ subject.subjectName }}</td>
          <td>{{ subject.subjectDescription }}</td>
          <td>
            <button class="btn btn-warning btn-sm" @click="editSubject(subject.subjectId)">Edit</button>
            <button class="btn btn-danger btn-sm" @click="deleteSubject(subject.subjectId)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
    <div v-else class="alert alert-info">Loading subjects...</div>
  </div>
  </template>
  
  <script>
  export default {
  data() {
    return {
      students: [],
      showForm: false,
      newSubject: {
        subjectName: '',
        subjectDescription: ''
      },
      editMode: false,
      editSubjectId: null
    }
  },
  mounted() {
    this.fetchSubjects()
  },
  methods: {
    fetchStudents() {
      fetch('http://localhost:7071/subjects') // Fetch existing students
        .then((response) => response.json())
        .then((data) => {
          this.students = data
          this.updateDashboard()
        })
        .catch((error) => {
          console.error('Error fetching subjects:', error)
        })
    },
    saveStudent() {
      const url = this.editMode 
        ? `http://localhost:7071/subjects/${this.editSubjectId}`
        : 'http://localhost:7071/subjects';
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
            const index = this.subjects.findIndex(subject => subject.subjectId === this.editSubjectId);
            this.$set(this.subjects, index, data); // Replace the old student data with the updated one
          } else {
            this.students.push(data); // Add the new student to the list
          }
          this.updateDashboard()
          this.resetForm(); // Reset the form
        })
        .catch((error) => {
          console.error('Error saving subject:', error)
        })
    },
    editSubject(id) {
      const subject = this.subjects.find(subject => subject.subjectId === id);
      if (subject) {
        this.newSubject = {
          subjectName: subject.subjectName,
          subjectDescription: subject.subjectDescription
        };
        this.editMode = true;
        this.editSubjectId = id;
        this.showForm = true;
      } else {
        console.error(`Subject with ID: ${id} not found.`);
      }
    },
    deleteSubject(id) {
      const subjectIndex = this.subjects.findIndex(subject => subject.subjectId === id);
      if (subjectIndex !== -1) {
        if (confirm(`Are you sure you want to delete the subject with ID: ${id}?`)) {
          fetch(`http://localhost:7071/subjects/${id}`, {
            method: 'DELETE'
          })
            .then(response => {
              if (response.ok) {
                this.subjects.splice(subjectIndex, 1); // Remove the student from the array
                this.updateDashboard(); // Update the dashboard
              } else {
                console.error('Failed to delete subject');
              }
            })
            .catch(error => {
              console.error('Error deleting subject:', error);
            });
        }
      } else {
        console.error(`Subject with ID: ${id} not found`);
      }
    },
    toggleForm() {
      this.resetForm();
      this.showForm = !this.showForm;
    },
    resetForm() {
      this.newSubject= { subjectName: '', subjectDescription: '' };
      this.editMode = false;
      this.editSubjectId = null;
      this.showForm = false;
    },
    updateDashboard() {
      this.$emit('updateDashboard', { subjects: this.subjects.length });
    }
  }
}
 </script>  