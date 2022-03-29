<template>
  <v-list-item 
    :prepend-icon="'mdi-call-split'"
    :title="`${vuelo.linea} ${vuelo.tipo?vuelo.tipo:''} ${vuelo.origen} - ${vuelo.destino}`"
    :subtitle="`$ ${vuelo.precio}`"
    >
    <template v-slot:append>
      <v-list-item-avatar end>
        <v-btn variant="text" color="grey lighten-1" icon="mdi-clock"></v-btn>
        <v-text>{{vuelo.tiempo}} </v-text>
        <v-btn variant="text" color="grey lighten-1" icon="mdi-calendar"></v-btn>
        <v-text>Fecha : {{vuelo.fecha}}</v-text>
      </v-list-item-avatar>
    </template>
  </v-list-item>
</template>
<script>
export default {
  props:['vuelo']
}
</script>