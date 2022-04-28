<template>
  <div>
    <p>{{ text }}</p>
  </div>
</template>

<script>
// Imports

export default {
  name: 'FooterText',
  props: {
    text: {
      type: String
    }
  }
}
</script>

<style scoped lang="scss">
p {
  width: 541px;
  height: 58px;
  color: #FFFFFF;

  font-family: 'Mark Pro';
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  text-align: right;
}
</style>
