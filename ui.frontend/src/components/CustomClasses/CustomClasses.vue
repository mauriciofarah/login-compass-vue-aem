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

    const formContainer = document.querySelector('[cqpath="/content/vue/vue/login/jcr:content/root/responsivegrid/container_1584677994/container"] div')
    formContainer.classList.add('form-container')

    const imagMobile = document.querySelector('[cqpath="/content/vue/vue/login/jcr:content/root/responsivegrid/container_1584677994/container/image"] ')
    imagMobile.classList.add('mobile-logo')
  }
}
</script>

<style lang="scss">
.bg-color {
  background: linear-gradient(180deg, #33383D 0%, #1C1D20 100%);
  box-shadow: 4px 4px 70px rgba(0, 0, 0, 0.25);
  height: 1080px;

  display: flex;
  justify-content: center;
  align-items: center;
}

@media screen and (max-width: 768px) {
  .bg-color {
      min-width: 100vw;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
  }
}

.form-container{
  width: 379px;
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

@media only screen and (max-width: 768px) {
  .bg-image {
    background: transparent;
  }
}
</style>
