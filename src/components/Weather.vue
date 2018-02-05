<template>
  <div class="col-xs-12">
    <div class="search">
      <label for="">
        Nombre de la ciudad a consultar:
        <input type="text" v-model="currentLocation">
        <button
          @click="getWeatherInformationFrom"
          class="btn btn-primary">Buscar
        </button>
      </label>
    </div>

    <div class="panel panel-primary">
      <div class="panel-heading"
           v-if="weatherInformation.weather">
        Mostrando la información de: {{weatherInformation.name}}, {{weatherInformation.sys.country}}
      </div>
      <div class="panel-body">
        <div class="col-xs-12" v-if="weatherInformation.weather">
          <hr>
          <label for="">
            Hoy habrá: {{weatherInformation.weather[0].description.toUpperCase()}}
            <img src="http://openweathermap.org/images/transparent.png" alt="Icon weather"
                 :style="{'background': `url('http://openweathermap.org/img/w/${weatherInformation.weather[0].icon}.png')`}">
          </label>
          <label for="">
            Nubosidad: {{weatherInformation.clouds.all}}%
          </label>
          <label for="">
            Temperatura: {{weatherInformation.main.temp}}°C
          </label>
          <label for="">
            Humedad: {{weatherInformation.main.humidity}}%
          </label>
          <label for="">
            Viento: {{weatherInformation.wind.speed}}m/s
          </label>
        </div>
        <div class="col-xs-12" v-if="!weatherInformation.weather && !errorExists">
          <h2>{{fallbackMessage}}</h2>
        </div>
        <div class="col-xs-12" v-if="errorExists">
          <h2>{{errorMessage}}</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "weather",
    data () {
      return {
        currentLocation: '',
        errorExists: 0,
        errorMessage: 'No se pudó obtener información de esta ciudad, intenta con otra por favor.',
        fallbackMessage: 'Obteniendo información...',
        weatherInformation: this.weatherInformation || {}
      }
    },
    methods: {
      getWeatherInformationFrom() {
        this.$http(this.urlToRequestWeatherFrom(this.currentLocation))
          .then(result => {
            this.weatherInformation = result.data
            this.errorExists = 0
          })
          .catch(() => {
            this.weatherInformation = {}
            this.errorExists = 1
          })
      }
    },
    mounted () {
      this.currentLocation = this.cityNameOfWeatherInformation()

      this.getWeatherInformationFrom()
    }
  }
</script>

<style lang="scss">
  label {display: block;}
  label, input {font-size: 18px}
  label img {height: 45px; width: 45px;}
</style>
