<template>
  <div>
    <h2 class="my-4">Dashboard</h2>
    <div class="row">
      <div class="col-md-4">
        <div
          class="card text-white bg-primary mb-3"
          style="cursor: pointer;"
          @click="openComponent('students')"
        >
          <div class="card-header">Total Students</div>
          <div class="card-body">
            <h5 class="card-title">{{ counts.students }}</h5>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div
          class="card text-white bg-success mb-3"
          style="cursor: pointer;"
          @click="openComponent('courses')"
        >
          <div class="card-header">Total Courses</div>
          <div class="card-body">
            <h5 class="card-title">{{ counts.courses }}</h5>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div
          class="card text-white bg-info mb-3"
          style="cursor: pointer;"
          @click="openComponent('subjects')"
        >
          <div class="card-header">Total Subjects</div>
          <div class="card-body">
            <h5 class="card-title">{{ counts.subjects }}</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    counts: {
      type: Object,
      required: true,
      validator(value) {
        return (
          typeof value.students === 'number' &&
          typeof value.courses === 'number' &&
          typeof value.subjects === 'number'
        );
      },
    },
  },
  methods: {
    openComponent(componentName) {
      this.$emit('openComponent', componentName);
    },
  },
};
</script>
