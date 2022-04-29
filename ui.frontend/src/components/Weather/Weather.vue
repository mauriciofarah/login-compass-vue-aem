<template>
  <div class="container-weather">
    <span class="region">{{ city }} - {{ regionState }}</span>
    <div class="temperature-container">
        <img :src="weatherIcon"/>
        <span class="temperature">{{ temperature }}º</span>
    </div>
  </div>
</template>

<script>
import WeatherService from '@/services/weatherService'
import localizationService from '@/services/localizationService'

export default {
  name: 'Wheater',
  data () {
    return {
      city: '',
      regionState: '',
      weatherIcon: '',
      temperature: ''
    }
  },
  mounted () {
    WeatherService.getWetherByLatLong(this.$http, {
      lat: '-28.264978335353234',
      long: '-52.412004631674485'
    })
      .then((response) => {
        this.city = response.location.name
        this.temperature = Math.round(response.current.temp_c)
        this.weatherIcon = response.current.condition.icon
        const stateName = response.location.region

        localizationService
          .getAllStatesOrderByName(this.$http)
          .then((response) => {
            this.regionState = response.find((state) => {
              return state.nome === stateName
            }).sigla
          })
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
</script>

<style>
.container-weather {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.region{
    font-family: 'Mark Pro';
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;

    text-align: center;
    color: #222222;
}
.temperature-container {
    display: flex;
    align-items: center;
}
.temperature {
    font-family: 'Mark Pro';
    font-weight: 700;
    font-size: 48px;
    line-height: 61px;

    text-align: center;
    color: #222222;
}
</style>
