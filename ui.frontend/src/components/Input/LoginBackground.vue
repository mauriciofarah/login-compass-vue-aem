<template>
  <el-input
    :placeholder="placeholder"
    suffix-icon="el-icon-date"
    v-model="input1">
  </el-input>
</template>

<script>
// Imports

export default {
  name: 'LoginBackground',
  props: {
    placeholder: {
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
