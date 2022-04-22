<template>
  <div this-component-is-responsible-to-allow-custom-classes-on-aem></div>
</template>

<script>
export default {
  name: 'CustomClasses',
  mounted () {
    const containerLeft = document.querySelector('[cqpath="/content/vue/vue/login/jcr:content/root/responsivegrid/container_1584677994"] div')
    containerLeft.classList.add('bg-color')

    const containerRight = document.querySelector('[cqpath="/content/vue/vue/login/jcr:content/root/responsivegrid/container"] div')
    containerRight.classList.add('bg-image')
  }
}
</script>

<style lang="scss">
.bg-color {
  background: linear-gradient(180deg, #33383D 0%, #1C1D20 100%);
  box-shadow: 4px 4px 70px rgba(0, 0, 0, 0.25);
  height: 1080px;
  padding-left: 30%;
}
.bg-image {
  background: url('/content/dam/vue/notebookBg.png') center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  width: 50vw;
  height: 1080px;
}
</style>
