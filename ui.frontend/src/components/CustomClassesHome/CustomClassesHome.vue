<template>
  <div this-component-is-responsible-to-allow-custom-classes-on-aem></div>
</template>

<script>
export default {
  name: 'CustomClasses',
  mounted () {
    const headerHome = document.querySelector('[cqpath="/content/vue/vue/home/jcr:content/root/responsivegrid/responsivegrid"] div')
    headerHome.classList.add('header-home')

    const bgImage = document.querySelector('[cqpath="/content/vue/vue/home/jcr:content/root/responsivegrid/container_1756929429/container_1086702911"] div')
    bgImage.classList.add('bg-img')

    const bgColorFooter = document.querySelector('[cqpath="/content/vue/vue/home/jcr:content/root/responsivegrid/container_1886506667"] div')
    bgColorFooter.classList.add('bg-color-footer')

    const firstContainerFoot = document.querySelector('[cqpath="/content/vue/vue/home/jcr:content/root/responsivegrid/container_1886506667/container"] div')
    firstContainerFoot.classList.add('first-container-footer')

    const secondContainerFoot = document.querySelector('[cqpath="/content/vue/vue/home/jcr:content/root/responsivegrid/container_1886506667/container_844255694"] div')
    secondContainerFoot.classList.add('second-container-footer')

    const thirdContainerFoot = document.querySelector('[cqpath="/content/vue/vue/home/jcr:content/root/responsivegrid/container_1886506667/container_759350401"] div')
    thirdContainerFoot.classList.add('third-container-footer')
  }
}
</script>

<style lang="scss">
.header-home {
  /* display: flex;
  justify-content: space-between; */
  padding: 25px 7% 20px 40px;
  /* align-items: flex-start;
  flex-direction: row; */
}

.bg-img {
  background: url('/content/dam/vue/bola-LogoCompasso.png');
  background-size: cover;
  width: 825px;
  height: 100%;
  position: absolute;
  top: 20%;
}

.bg-color-footer {
  background: linear-gradient(90.16deg, #33383D 0%, #1C1D20 100%);
  width: 100%;
  height: 100px;
  position: absolute;
  bottom: 0px;
  z-index: 2;

  display: flex;
  //flex-direction: row;
}

.first-container-footer {
  border-right: solid 1px #FFFFFF;
}

.second-container-footer {
  border-right: solid 1px #FFFFFF;
}

.third-container-footer {

}
</style>
