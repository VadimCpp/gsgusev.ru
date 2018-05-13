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
    v-on:closeSidebar="hideSidebar"
    v-on:switchCity = "switchCity"
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
      var navButtons = document.getElementsByClassName('gs-nav-btn')
      for (var i = navButtons.length - 1; i >= 0; i--) {
        navButtons[i].style.opacity = '1'
      }

      document.getElementById('off-canvas').style.width = '100%'
      document.getElementById('off-canvas-bar').style.width = '250px'
      document.getElementById('label-city').style.opacity = '1'
      document.getElementsByTagName('hr')[0].style.opacity = '1'
    },
    hideSidebar: function () {
      var navButtons = document.getElementsByClassName('gs-nav-btn')
      for (var i = navButtons.length - 1; i >= 0; i--) {
        navButtons[i].style.opacity = '0'
      }

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
    switchCity: function (city) {
      if (this.$route.params.city !== city) {
        var navButtons = document.getElementsByClassName('gs-nav-btn')
        for (var i = navButtons.length - 1; i >= 0; i--) {
          if (navButtons[i] !== null) {
            navButtons[i].classList.remove('active')
          } else {
            console.error('[e] .gs-nav-btn not found')
          }
        }

        if (document.getElementById(city + '-btn') !== null) {
          document.getElementById(city + '-btn').classList.add('active')
        } else {
          console.error('[e] active city button not found')
        }

        var cityName = 'gusev'

        switch (city) {
          case 'gsv':
            cityName = 'gusev'
            break
          case 'kgd':
            cityName = 'kaliningrad'
            break
        }

        this.hideSidebar()
        this.sidebarVisible = false
        this.$route.params.city = city
        this.$route.params.cityName = cityName
        this.saveDefaultCity(cityName)

        this.$router.push({path: '/' + city, params: { city: city }})
      }
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
      } else {
        pathCity = 'gsv'
      }

      this.switchCity(pathCity)
    }
  }
}
</script>

<style lang="scss">

@import './assets/scss/app.scss'

</style>
