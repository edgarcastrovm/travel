<template>
  <v-card >
    <v-layout>
      <v-app-bar color="blue" density="compact">
        <template v-slot:prepend>
          <v-app-bar-nav-icon></v-app-bar-nav-icon>
        </template>
        <v-app-bar-title>
          <v-btn flat> <router-link to="/">Home</router-link> </v-btn>
          <router-link to="/travel">Travel</router-link>
        </v-app-bar-title>
        <template v-slot:append>
          <v-btn icon="mdi-dots-vertical"></v-btn>
        </template>
      </v-app-bar>
      <v-main>
        <v-container fluid>
          <router-view></router-view>
        </v-container>
      </v-main>
    </v-layout>
  </v-card>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import colors from 'vuetify/lib/util/colors'
export default {
  name: 'App',

  components: {
    HelloWorld,
    components,
    directives
  },

  data: () => ({
    //
  }),
}
</script>
