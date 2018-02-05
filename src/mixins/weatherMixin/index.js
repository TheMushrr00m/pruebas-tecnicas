import OpenWeatherApi from './openWeatherAPI'

const openWeatherApi = new OpenWeatherApi()

export default {
  methods: {
    urlToRequestWeatherFrom (cityName) {
      return openWeatherApi.getWeatherForCity(cityName)
    },
    cityNameOfWeatherInformation () {
      return openWeatherApi.city
    }
  }
}
