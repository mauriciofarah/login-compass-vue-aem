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
      HomeLogo: '/content/dam/vue/uolLogo.png'
    }
  }
}
</script>

<style scoped lang="scss">

</style>
