<template>
        <v-virtual-scroll height="144" item-height="20">
  <v-card class="mx-auto" max-width="1000" >
    <v-list>
      <v-list-subheader>Vuelos</v-list-subheader>
        <ItemVuelo v-for="(item, i) in turnos" :key="i" :value="i" :vuelo='item'  active-color="primary" variant="plain" >
        </ItemVuelo>
    </v-list>
  </v-card>
      </v-virtual-scroll>
</template>
<script>
  import ItemVuelo from '../components/ItemVuelo.vue'
  export default {
    components:{
      ItemVuelo
    },
    data () {
      return {
        vuelos: [],
        horarios: [],
        turnos:[]
      }
    },
    mounted () {
      this.vuelos = this.$store.state.vuelos
      this.horarios = this.$store.state.horarios
      this.buildTurnos()
    },
    methods:{
      buildTurnos(){
        this.horarios.forEach(el => {
          let vuelo = this.vuelos.filter((vl) => vl.id === el.vuelo, )[0] || {}
          let turno = {
            'id': el.id,
            'fecha': el.fecha ,
            'vuelo': el.vuelo,
            'lleno': el.lleno,
            'origen': vuelo.origen,
            'destino': vuelo.destino,
            'precio': vuelo.precio,
            'linea': vuelo.linea,
            'tiempo':vuelo.tiempo
          }
          this.turnos.push(turno)
        })
      }
    }
  }
</script>
<style scoped>
.v-list {
  max-height: 85vh;
}
</style>