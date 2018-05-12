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
    this.navbtnVisible = ['/', '/gsv', '/kgd'].indexOf(this.$route.path) !== -1
    this.footerVisible = this.$route.path !== '/karta_poselka'
  },
  watch: {
    '$route': function (to, from) {
      if (['/', '/gsv', '/kgd'].indexOf(to.path) !== -1) {
        this.navbtnVisible = true
        this.loadDefaultCity()
      } else {
        this.navbtnVisible = false
      }

      if (to.path.indexOf('/karta_poselka') !== -1) {
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

      if (document.getElementById('main-menu') !== null) {
        document.getElementById('main-menu').classList.remove('kaliningrad')
        document.getElementById('main-menu').classList.add('gusev')
      } else {
        console.error('[E][showGusevItems] main-menu element is not found. City: Gusev.')
      }

      this.hideSidebar()
      this.sidebarVisible = false
      this.$route.params.city = 'gsv'
      this.$route.params.cityName = 'gusev'
      this.saveDefaultCity('gusev')
    },
    showKaliningradItems: function () {
      document.getElementById('kgd-btn').classList.add('active')
      document.getElementById('gusev-btn').classList.remove('active')

      if (document.getElementById('main-menu') !== null) {
        document.getElementById('main-menu').classList.remove('gusev')
        document.getElementById('main-menu').classList.add('kaliningrad')
      } else {
        console.error('[E][showKaliningradItems] main-menu element is not found. City: Kaliningrad.')
      }

      this.hideSidebar()
      this.sidebarVisible = false
      this.$route.params.city = 'kgd'
      this.$route.params.cityName = 'kaliningrad'
      this.saveDefaultCity('kaliningrad')
    },

    saveDefaultCity: function (city) {
      localStorage.setItem('city', city)
    },

    loadDefaultCity: function () {
      let city = localStorage.getItem('city')
      let pathCity = this.$route.path.replace(new RegExp('/', 'g'), '')

      if (pathCity.length > 0 && pathCity !== city) {
        switch (pathCity) {
          case 'gsv':
            city = 'gusev'
            break
          case 'kgd':
            city = 'kaliningrad'
            break
        }
      }

      // (!) Main menu element is present only at Home page
      switch (city) {
        case 'kaliningrad':
          this.showKaliningradItems()
          break
        case 'gusev':
          this.showGusevItems()
          break
      }
    }
  }
}
</script>

<style lang="scss">

@import './assets/scss/app.scss'

</style>
