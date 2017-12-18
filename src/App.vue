<template>
  <div id="app">

  <!-- Header -->
  <header class="gs-header">
    <div class="gs-header__veil"></div>
    <div class="gs-header__image"></div>
    <div class="gs-header__off-canvas-btn" id="off-canvas-btn" v-on:click="openNav">
      <i class="gs-icon-menu"> </i>
    </div>
  </header>

  <!-- Main -->
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
  name: 'app',
  mounted () {
    var that = this

    document.getElementById('off-canvas').addEventListener('click', function () {
      that.closeNav()
    })

    document.getElementById('off-canvas-bar').addEventListener('click', function (e) {
      e.stopImmediatePropagation()
    })

    document.getElementById('off-canvas-btn').addEventListener('click', function () {
      that.openNav()
    })

    document.getElementById('gusev-btn').addEventListener('click', function () {
      document.getElementById('gusev-btn').classList.add('active')
      document.getElementById('kgd-btn').classList.remove('active')
      document.getElementById('main-menu').classList.remove('kaliningrad')
      document.getElementById('main-menu').classList.add('gusev')
      that.closeNav()
      that.saveDefaultCity('gusev')
    })

    document.getElementById('kgd-btn').addEventListener('click', function () {
      document.getElementById('kgd-btn').classList.add('active')
      document.getElementById('gusev-btn').classList.remove('active')
      document.getElementById('main-menu').classList.remove('gusev')
      document.getElementById('main-menu').classList.add('kaliningrad')
      that.closeNav()
      that.saveDefaultCity('kaliningrad')
    })

    that.loadDefaultCity()

    document.getElementById('main-menu').classList.remove('kaliningrad')
    document.getElementById('main-menu').classList.add('gusev')
  },
  methods: {
    openNav: function () {
      document.getElementById('off-canvas').style.width = '100%'
      document.getElementById('off-canvas-bar').style.width = '250px'
      document.getElementById('gusev-btn').style.opacity = '1'
      document.getElementById('kgd-btn').style.opacity = '1'
      document.getElementById('label-city').style.opacity = '1'
      document.getElementsByTagName('hr')[0].style.opacity = '1'
    },
    closeNav: function () {
      document.getElementById('kgd-btn').style.opacity = '0'
      document.getElementById('gusev-btn').style.opacity = '0'
      document.getElementById('label-city').style.opacity = '0'
      document.getElementById('off-canvas').style.width = '0'
      document.getElementById('off-canvas-bar').style.width = '0'
      document.getElementsByTagName('hr')[0].style.opacity = '0'
    },
    saveDefaultCity: function (city) {
      // TODO: save currently selected city to IndexedDB
    },
    loadDefaultCity: function () {
      // TODO: load default city from IndexedDB
    }
  }
}
</script>

<style lang="scss">

@import './assets/scss/app.scss';

</style>
