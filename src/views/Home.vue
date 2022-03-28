<template>
  <v-card class="mx-auto" max-width="600" >
    <v-list>
      <v-list-subheader>Vuelos</v-list-subheader>
      <ItemVuelo v-for="(item, i) in vuelos" :key="i" :value="i" :vuelo='item'  active-color="primary" variant="plain" >
      </ItemVuelo>
    </v-list>
  </v-card>
</template>
<script>
  import ItemVuelo from '../components/ItemVuelo.vue'
  export default {
    components:{
      ItemVuelo
    },
    data () {
      return {
        vuelos: []
      }
    },
    mounted () {
      this.vuelos = this.$store.state.vuelos
    }
  }
</script>