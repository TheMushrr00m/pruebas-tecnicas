<template>
  <div class="col-xs-12">
    <table class="table table-bordered">
      <thead>
        <th>#</th>
        <th>Nombre</th>
        <th>Símbolo</th>
        <th>Precio en USD</th>
        <th>Precio en BTC</th>
      </thead>
      <tbody>
      <tr v-for="(crypto, key) in crytoInformation" :key="key">
        <th>{{crypto.rank}}</th>
        <th>{{crypto.name}}</th>
        <th>{{crypto.symbol}}</th>
        <th>{{crypto.price_usd}} $</th>
        <th>{{crypto.price_btc}}</th>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    name: "crypto",
    data () {
      return {
        crytoInformation: ''
      }
    },
    mounted () {
      this.$http('https://api.coinmarketcap.com/v1/ticker/?limit=10')
        .then(result => {
          console.log(result.data)
          this.crytoInformation = result.data
        })
        .catch(err => {
          throw err;
        })
    }
  }
</script>

<style lang="scss">
  label {
    display: block;}
  thead th,
  tbody th {text-align: center}
  thead {font-size: 18px}
</style>
