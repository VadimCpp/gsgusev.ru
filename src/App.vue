<template>
  <div id="app">

    <!-- Header -->
    <header class="gs-header">
        <div class="gs-header__veil"></div>
        <div class="gs-header__image"></div>
        <!-- <div class="gs-header__off-canvas-btn" id="off-canvas-btn">
            <i class="gs-icon-menu"> </i>
        </div> -->
    </header>

    <!-- Main -->
    <main>
      <transition name="fade">  
        <router-view></router-view>
      </transition>
    </main>

    <!-- Footer -->
    <footer class="gs-footer">
        <div class="gs-footer__veil"></div>
        <div class="gs-footer__image_land"></div>
        <div class="gs-footer__image"></div>
    </footer>

  </div>

</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">

@import './assets/scss/app.scss';

// TODO: read and update transition
// https://vuejs.org/v2/guide/transitions.html

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0
}

</style>
