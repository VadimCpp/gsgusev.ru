<template>
  <div class="karta-poselka">

    <!-- Breadcrumb -->
    <section class="gs-container gs-container_center">
      <ol class="gs-breadcrumb">
        <li class="gs-breadcrumb__list-item"> <router-link class="gs-breadcrumb__link" :to="{ name: 'Home' }"> GS Гусев </router-link> </li>
        <li class="gs-breadcrumb__list-item gs-breadcrumb__list-item_active"> Карта поселка </li>
      </ol>
    </section>

    <!-- Leaflet map -->
    <div id='map' class="gs-leaflet-map">
    </div>

    // TODO: https://www.npmjs.com/package/vue2-leaflet
    
    <!--<script>
        var map = L.map('map').setView([54.6072,22.2027], 16);

        // 
        // To customize layer provider visit the website:
        // http://leaflet-extras.github.io/leaflet-providers/preview/
        //
        L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, Tiles courtesy of <a href="http://hot.openstreetmap.org/" target="_blank">Humanitarian OpenStreetMap Team</a>'
        }).addTo(map);
        
    </script>-->

  </div>
</template>

<script>
export default {
  name: 'KartaPoselka',
  props: ['title'],
  created () {
    document.title = this.title
  },
  watch: {
    title () {
      // only used when the title changes after page load
      document.title = this.title
    }
  },
  render () {
  }
}
</script>

<style lang="scss" scoped>

@import '../assets/scss/karta-poselka.scss';

</style>
