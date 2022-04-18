<template>
  <div :class="className" />
</template>

<script>
// Imports

export default {
  name: 'LoginBackground',
  props: {
    className: {
      type: String
    }
  }
}
</script>

<style scoped>
.background-image {
  background: url('../../assets/notebook.png') no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}

.background-color {
  background-color: #1d1e20;
  height: 500px;
  width: 500px;
}
</style>
