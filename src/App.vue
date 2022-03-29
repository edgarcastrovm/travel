<template>
  <v-card >
    <v-layout>
      <v-app-bar color="blue" density="compact">
        <template v-slot:prepend>
          <v-app-bar-nav-icon></v-app-bar-nav-icon>
        </template>
        <v-app-bar-title>
          <v-btn link> <router-link link to="/">Home</router-link> </v-btn>
          <v-btn link> <router-link  link to="/travel">Travel</router-link></v-btn>
        </v-app-bar-title>
        <template v-slot:append>
          <v-btn icon="mdi-dots-vertical"></v-btn>
        </template>
      </v-app-bar>
      <v-main>
        <v-container fluid style="min-height:95vh">
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
<style scoped>
  a{
    text-decoration: none;
    font-weight: bold;
    color: white;
  }
</style>
