<template>
  <img :src="src"/>
</template>

<script>
export default {
  name: 'Image',
  props: {
    src: {
      type: String
    }
  }
}
</script>

<style scoped lang="scss">
  @media only screen and (min-width: 426px) {
    img {
      width: 40vw
    }
  }

  @media only screen and (max-width: 426px) {
    img {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 220.35px;
    }
  }
</style>
