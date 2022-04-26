<template>
  <div>
    <img :src="MobileLogo" alt="uolLogo" />
  </div>
</template>

<script>
export default {
  name: 'MobileLogo',
  data () {
    return {
      MobileLogo: '/content/dam/vue/uolLogo.png'
    }
  }
}
</script>

<style scoped lang="scss">
img {
  display: none;
}

@media only screen and (max-width: 768px) {
  img{
    display: block;
    width: 306px;
    height: 69px;
    margin-top: 25%;
    margin-bottom: 45%;
  }
}

</style>
