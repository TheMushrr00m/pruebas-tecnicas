<template>
  <div id="app" class="container">
    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
      <div class="jumbotron">
        <h1>Prueba técnica</h1>
        <h2>Instrucciones:</h2>
        <p>
          Realizar un proyecto en Angular 2+/Vue.js que consuma la siguiente API: <br>
          <a href="https://openweathermap.org/api">https://openweathermap.org/api</a><br><br>
        </p>
        <ul>
          <li>Que tenga una vista con un buscador por ciudad.</li>
          <li>Desplegar la información.</li>
          <li>Despliegue la informaición de esta url: <a href="https://api.coinmarketcap.com/v1/ticker/?limit=10">https://api.coinmarketcap.com/v1/ticker/?limit=10</a></li>
        </ul>
        <p>
          Repo: <a href="https://github.com/TheMushrr00m/pruebas-tecnicas">https://github.com/TheMushrr00m/pruebas-tecnicas</a>
        </p>
      </div>

      <div class="links-wrapper col-xs-12">
        <router-link to="/" class="links-wrapper__element col-xs-6">OpenWeatherAPI information</router-link>
        <router-link to="/crypto-check" class="links-wrapper__element col-xs-6">CoinMarketCapApi information</router-link>
      </div>

      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
  .links-wrapper {margin: 40px 0;}
  .links-wrapper__element {
    border-bottom: 1px solid #000;
    font-size: 18px;
    opacity: 0.5;
    padding: 0;
    text-align: center;
    &:first-child {border-right: 1px solid #000;}
  }
  .router-link-exact-active {opacity: 1;}
</style>
