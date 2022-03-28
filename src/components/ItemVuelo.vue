<template>
  <v-list-item 
    :prepend-icon="'mdi-call-split'"
    :title="`${vuelo.origen} - ${vuelo.destino}`"
    :subtitle="`$ ${vuelo.precio}`"
    >
    <template v-slot:append>
      <v-list-item-avatar end>
        <v-btn variant="text" color="grey lighten-1" icon="mdi-information"></v-btn>
      </v-list-item-avatar>
    </template>
  </v-list-item>
</template>
<script>
export default {
  props:['vuelo']
}
</script>