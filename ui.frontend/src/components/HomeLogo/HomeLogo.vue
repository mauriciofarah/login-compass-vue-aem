<template>
  <div>
    <img :src="HomeLogo" alt="uolLogo" />
  </div>
</template>

<script>
export default {
  name: 'HomeLogo',
  data () {
    return {
      HomeLogo: '/content/dam/vue/LogoCompassoHome.png'
    }
  }
}
</script>

<style scoped lang="scss">
img {
  width: 150px;
  height: 42.75px;
}
</style>
