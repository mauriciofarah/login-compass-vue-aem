<template>
  <div>
    <img :src="uolLogo" alt="uolLogo" />
  </div>
</template>

<script>
export default {
  name: 'RightLogin',
  data () {
    return {
      uolLogo: '/content/dam/vue/uolLogo.png'
    }
  }
}
</script>

<style scoped lang="scss">
div {
  display: flex;
  justify-content: center;
  padding-top: 3%;
}

img {
  width: 306px;
  height: 69px;
}
</style>
