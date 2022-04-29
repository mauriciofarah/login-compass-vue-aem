import { WEATHER_TOKEN } from '@/static/constants'

const WeatherService = {
  getWetherByLatLong: async (axios, data) => {
    const response = await axios.get(
      `https://api.weatherapi.com/v1/current.json?key=${WEATHER_TOKEN}&q=${data.lat},${data.long}&aqi=no&lang=pt`
    )
    return response.data
  }

  // `https://api.openweathermap.org/data/2.5/weather?lat=${data.lat}&lon=${data.long}&appid=${WEATHER_TOKEN}&units=metric&lang=pt_br`
}

export default WeatherService
