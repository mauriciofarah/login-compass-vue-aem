<template>
  <div this-component-is-responsible-to-allow-custom-classes-on-aem></div>
</template>

<script>
export default {
  name: 'CustomClasses',
  mounted () {
    const headerHome = document.querySelector('[cqpath="/content/vue/vue/home/jcr:content/root/responsivegrid/container"] ')
    headerHome.classList.add('header-home')
  }
}
</script>

<style lang="scss">
.header-home {
  display: flex;
  justify-content: space-between;
  padding: 25px 7% 20px 40px;
  align-items: flex-start;
  flex-direction: row;
}
</style>
