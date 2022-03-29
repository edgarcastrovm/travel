<template>
  <v-form>
    <v-container>
      <v-row>
        <v-col>
          <v-autocomplete
                ref="salida"
                v-model="salida"
                :append-icon="salida ? 'mdi-map-marker' : 'mdi-map-marker-off'"
                :rules="[() => !!salida || 'This field is required']"
                :items="countryStart"
                label="Ciudad salida"
                placeholder="Seleccione..."
                variant="underlined"
                required
              ></v-autocomplete>
        </v-col>
        <v-col>
          <Datepicker
            v-model="dStart"
            placeholder="Seleccione fecha salida"
            :format="format"
          />
        </v-col>
        <v-col>
          
          <v-autocomplete
                ref="destino"
                v-model="destino"
                :append-icon="salida ? 'mdi-map-marker' : 'mdi-map-marker-off'"
                :rules="[() => !!destino || 'This field is required']"
                :items="countryStart"
                label="Ciudad destino"
                placeholder="Seleccione..."
                required
              ></v-autocomplete>
        </v-col>
        <v-col>
          <Datepicker
            v-model="dEnd"
            placeholder="Seleccione fecha retorno"
            :format="format"
          />
        </v-col>
      </v-row>
        <v-card-actions>
          <v-btn text>
            Cancel
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="submit" >
            Submit
          </v-btn>
        </v-card-actions>
    </v-container>
    <v-alert
      v-model="alert"
      border="start"
      variant="contained-text"
      closable
      close-label="Error"
      type="error"
      title="Error"
    >{{error}}
    </v-alert>
  </v-form>

  <v-card class="mx-auto" max-width="1000" >
    <v-list>
      <v-list-subheader>Vuelos disponibles</v-list-subheader>
      <ItemVuelo v-for="(item, i) in turnosDisp" :key="i" :value="i" :vuelo='item'  active-color="primary" variant="plain" >
      </ItemVuelo>
    </v-list>
  </v-card>
</template>

<script>
import {ItemVuelo } from '../components/ItemVuelo.vue'

export default {
  data() {
    return {
      alert: false,
      error: '1',
      dStart: new Date(),
      dEnd: new Date(),
      salida: '',
      destino: '',
      countryStart:[],
      countryEnd:[],
      vuelos: [],
      horarios : [],
      turnos:[],
      turnosDisp:[]
    }
  },
  components:{
    ItemVuelo
  },
  mounted(){
    this.vuelos = this.$store.state.vuelos
    this.horarios = this.$store.state.horarios
    let country = {}
    this.vuelos.filter(function (e) { 
      return country[e.origen] ? false : (country[e.origen] = e.origen)
    })
    console.log(country)
    this.countryStart = Object.keys(country)
    this.buildTurnos()
  },
  methods:{
    format(date){
      const day = date.getDate()
      const month = date.getMonth() + 1
      const year = date.getFullYear()
      return `${day}/${month}/${year}`
    },
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
    },
    submit(){
      this. error = ''
      this.error += this.salida?'': 'Seleccione ciudad salida \n'
      this.error += this.dStart?'': 'Seleccione fecha salida '
      this.error += this.destino?'': 'Seleccione ciudad destino '
      this.error += this.dEnd?'': 'Seleccione fecha retorno '
      if(this.error){
        this.alert=true
        return
      }
      
    }
  }

}
</script>