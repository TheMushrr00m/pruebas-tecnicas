export default class OpenWeatherApi {
  constructor () {
    this.baseUrl = 'https://api.openweathermap.org/data/2.5/weather?lang=es&appid='
    this.apiKey = '' // Añadir API Key
    this.city = 'Cancun'
    this.requestUrl = `${this.baseUrl}${this.apiKey}&q=${this.city}&units=metric`
  }

  setNewURLToRequest () {
    this.requestUrl = `${this.baseUrl}${this.apiKey}&q=${this.city}&units=metric`
  }

  getWeatherForCity (cityName) {
    this.city = cityName
    this.setNewURLToRequest()
    return this.requestUrl
  }
}
