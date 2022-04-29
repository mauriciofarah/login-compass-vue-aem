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
div {
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0px 2%;

  p {
    width: 541px;
    color: #FFFFFF;

    font-family: 'Mark Pro';
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    text-align: right;
  }
}
</style>
