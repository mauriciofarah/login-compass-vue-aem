<template>
  <button>
    <p>
      {{text}}
    </p>
  </button>
</template>

<script>
// Imports

export default {
  name: 'ButtonLogin',
  props: {
    text: {
      type: String
    }
  }
}
</script>

<style scoped lang="scss">
button {
  color: white;
  border-radius: 50px;
  border: none;
  font-size: 18px;
  background: linear-gradient(90deg, #ff2d04 0%, #c13216 100%);
  box-shadow: inset 5px 5px 15px rgba(0, 0, 0, 0.15);
  padding: 5px 0;
  margin-top: 13.24%;
  width: 100%;
  height: 67px;

  &:hover {
    cursor: pointer;
    background: linear-gradient(90deg, #ff2d04 100%, #c13216 0%);
    transition: 0.4ms;
  }
}
</style>
