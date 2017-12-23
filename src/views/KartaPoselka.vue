<template>
  <div class="karta-poselka">

    <!-- Breadcrumb -->
    <ul class="gs-breadcrumb gs-breadcrumb_margin-right-left gs-breadcrumb_bg-color-transparency">
      <li class="gs-breadcrumb__list-item"> <router-link class="gs-breadcrumb__link" :to="{ name: 'Home' }"> GS Гусев </router-link> </li>
      <li class="gs-breadcrumb__list-item gs-breadcrumb__list-item_active"> Карта поселка </li>
    </ul>

    <!-- Leaflet map -->
    <v-map class="gs-leaflet-map" :zoom="zoom" :center="center" :maxZoom="maxZoom" :minZoom="minZoom">
      <v-tilelayer :url="url" :attribution="attribution"></v-tilelayer>
    </v-map>
  </div>
</template>

<script>

import L from 'leaflet'
import Vue2Leaflet from 'vue2-leaflet'

export default {
  name: 'KartaPoselka',
  props: ['title'],
  created () {
    document.title = this.title
  },
  components: {
    'v-map': Vue2Leaflet.Map,
    'v-tilelayer': Vue2Leaflet.TileLayer,
    'v-marker': Vue2Leaflet.Marker
  },
  data: function () {
    return {
      url: 'https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png',
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, Tiles courtesy of <a href="http://hot.openstreetmap.org/" target="_blank">Humanitarian OpenStreetMap Team</a>',
      maxZoom: 19,
      minZoom: 1,
      zoom: 16,
      center: L.latLng(54.6072, 22.2027)
    }
  },
  watch: {
    title () {
      document.title = this.title
    }
  }
}
</script>

<style lang="scss" scoped>

@import '../assets/scss/karta-poselka.scss';
@import '../../node_modules/leaflet/dist/leaflet.css';

</style>
