<template>
  <div id="app">

  <!-- Header -->
  <header class="gs-header">
    <div class="gs-header__veil" v-bind:class="{ 'gs-header__veil_default-map-color' : !isFooterVisible() }"></div>
    <div class="gs-header__image"></div>   
    <div class="gs-header__off-canvas-btn" id="off-canvas-btn" v-on:click="toggleSidebar()" v-show="isNavButtonVisible()">
      <i class="gs-icon-menu"> </i>
    </div>
  </header>
  
  <SideBar
    v-on:showGusevItems="showGusevItems"
    v-on:showKaliningradItems="showKaliningradItems"
    v-on:closeSidebar="hideSidebar"
  >
  </SideBar>

  <!-- Main -->
  <main>
    <router-view></router-view>
  </main>

  <!-- Footer -->
  <footer class="gs-footer" v-show="isFooterVisible()">
    <div class="gs-footer__veil"></div>
    <div class="gs-footer__image_land"></div>
    <div class="gs-footer__image"></div>
  </footer>

  </div>

</template>

<script>

import SideBar from './components/SideBar'

export default {
  name: 'app',

  components: {
    SideBar
  },
  data: function () {
    return {
      sidebarVisible: false,
      navbtnVisible: true,
      footerVisible: true
    }
  },
  mounted () {
    this.loadDefaultCity()
    this.navbtnVisible = this.$route.path === '/'
    this.footerVisible = this.$route.path !== '/karta_poselka'
  },
  watch: {
    '$route': function (to, from) {
      if (to.path === '/') {
        this.navbtnVisible = true
      } else {
        this.navbtnVisible = false
      }

      if (to.path === '/karta_poselka') {
        this.footerVisible = false
      } else {
        this.footerVisible = true
      }
    }
  },
  methods: {
    isSidebarDisplayed: function () {
      return this.sidebarVisible
    },
    isNavButtonVisible: function () {
      return this.navbtnVisible
    },
    isFooterVisible: function () {
      return this.footerVisible
    },
    showSidebar: function () {
      document.getElementById('off-canvas').style.width = '100%'
      document.getElementById('off-canvas-bar').style.width = '250px'
      document.getElementById('gusev-btn').style.opacity = '1'
      document.getElementById('kgd-btn').style.opacity = '1'
      document.getElementById('label-city').style.opacity = '1'
      document.getElementsByTagName('hr')[0].style.opacity = '1'
    },
    hideSidebar: function () {
      document.getElementById('kgd-btn').style.opacity = '0'
      document.getElementById('gusev-btn').style.opacity = '0'
      document.getElementById('label-city').style.opacity = '0'
      document.getElementById('off-canvas').style.width = '0'
      document.getElementById('off-canvas-bar').style.width = '0'
      document.getElementsByTagName('hr')[0].style.opacity = '0'
    },
    toggleSidebar: function () {
      if (this.sidebarVisible) {
        this.hideSidebar()
        this.sidebarVisible = false
      } else {
        this.sidebarVisible = true
        this.showSidebar()
      }
    },
    showGusevItems: function () {
      document.getElementById('gusev-btn').classList.add('active')
      document.getElementById('kgd-btn').classList.remove('active')
      document.getElementById('main-menu').classList.remove('kaliningrad')
      document.getElementById('main-menu').classList.add('gusev')
      this.hideSidebar()
      this.sidebarVisible = false
      this.saveDefaultCity('gusev')
    },
    showKaliningradItems: function () {
      document.getElementById('kgd-btn').classList.add('active')
      document.getElementById('gusev-btn').classList.remove('active')
      document.getElementById('main-menu').classList.remove('gusev')
      document.getElementById('main-menu').classList.add('kaliningrad')
      this.hideSidebar()
      this.sidebarVisible = false
      this.saveDefaultCity('kaliningrad')
    },

    saveDefaultCity: function (city) {
      localStorage.setItem('city', city)
    },

    loadDefaultCity: function () {
      let city = localStorage.getItem('city')

      if (city === 'kaliningrad') {
        this.showKaliningradItems()
      } else if (city === 'gusev') {
        this.showGusevItems()
      }
    }
  }
}
</script>

<style lang="scss">

@import './assets/scss/app.scss';

</style>
