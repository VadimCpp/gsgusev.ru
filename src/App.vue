<template>
  <div id="app">
    
    <!-- Header -->
    <header class="gs-header">
        <div class="gs-header__veil"></div>
        <div class="gs-header__image"></div>
        <div class="gs-header__off-canvas-btn" id="off-canvas-btn">
            <i class="gs-icon-menu"> </i>
        </div>
    </header>
    <main>
      <router-view></router-view>
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

#app {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

@import './assets/scss/index.scss';

</style>
