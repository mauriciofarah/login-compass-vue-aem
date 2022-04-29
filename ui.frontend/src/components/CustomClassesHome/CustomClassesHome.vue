<template>
  <div this-component-is-responsible-to-allow-custom-classes-on-aem></div>
</template>

<script>
export default {
  name: 'CustomClasses',
  mounted () {
    const headerHome = document.querySelector('[cqpath="/content/vue/vue/home/jcr:content/root/responsivegrid/responsivegrid_1511877422"]')
    headerHome.classList.add('header-home')

    const bgImage = document.querySelector('[cqpath="/content/vue/vue/home/jcr:content/root/responsivegrid/container_1756929429/container_1086702911"] div')
    bgImage.classList.add('bg-img')

    const bgColorFooter = document.querySelector('[cqpath="/content/vue/vue/home/jcr:content/root/responsivegrid/responsivegrid"] div')
    bgColorFooter.classList.add('bg-color-footer')

    const weatherCard = document.querySelector('[cqpath="/content/vue/vue/home/jcr:content/root/responsivegrid/responsivegrid_1511877422/weather"]')
    weatherCard.classList.add('weather-card')

    const dateCard = document.querySelector('[cqpath="/content/vue/vue/home/jcr:content/root/responsivegrid/responsivegrid_1511877422/datetime"]')
    dateCard.classList.add('date-card')

    const homelogoCard = document.querySelector('[cqpath="/content/vue/vue/home/jcr:content/root/responsivegrid/responsivegrid_1511877422/homelogo"]')
    homelogoCard.classList.add('logo-card')

    const inputHome = document.querySelector('[cqpath="/content/vue/vue/home/jcr:content/root/responsivegrid/responsivegrid/inputhome"]')
    inputHome.classList.add('home-input')

    const mediaFooterText = document.querySelector('[cqpath="/content/vue/vue/home/jcr:content/root/responsivegrid/responsivegrid/footertext"] ')
    mediaFooterText.classList.add('media-footer-text')

    const mediaBodyText = document.querySelector('[cqpath="/content/vue/vue/home/jcr:content/root/responsivegrid/container_1756929429/container"] ')
    mediaBodyText.classList.add('media-body-text')

    const mediaHeaderHome = document.querySelector('[cqpath="/content/vue/vue/home/jcr:content/root/responsivegrid/responsivegrid_1511877422"] div')
    mediaHeaderHome.classList.add('media-header-home')
  }
}
</script>

<style lang="scss">
.header-home {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100% !important;
  padding: 2% 2% 7% 2%;
}

@media only screen and (max-width: 1024px) {
  .media-header-home {
    display: flex !important;
  }
}

.bg-img {
  background: url('/content/dam/vue/bola-LogoCompasso.png');
  background-size: cover;
  width: 618.5px;
  height: 825px;
  position: absolute;
  bottom: 4%;
}

@media only screen and (max-width: 1024px) {
  .bg-img {
    width: 543px;
    height: 679px;
    bottom: 9%;
  }
}

@media only screen and (max-width: 425px) {
  .bg-img {
    width: 496px;
    height: 676px;
    bottom: 5%;
  }
}

.bg-color-footer {
  background: linear-gradient(90.16deg, #33383D 0%, #1C1D20 100%);
  width: 100%;
  height: 100px;
  position: absolute;
  bottom: 0px;
  z-index: 2;

  display: flex;
}

.weather-card {
  display: flex !important;
  justify-content: flex-end;
  width: 33.333% !important;
}

.date-card {
  width: 33.333% !important;
  margin: 0 !important;
}

.logo-card {
  width: 33.333% !important;
}

.home-input {
  display: flex !important;
  align-items: center;
}

@media only screen and (max-width: 1024px) {
  .media-footer-text {
    display: none !important;
  }
}

@media only screen and (max-width: 1024px) {
  .media-body-text {
    display: none !important;
  }
}
</style>
