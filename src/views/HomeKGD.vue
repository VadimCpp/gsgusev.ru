<template>

  <div class="home">

    <!-- Breadcrumb -->
    <section class="gs-container gs-container_center">
      <ol class="gs-breadcrumb">
        <li class="gs-breadcrumb__list-item gs-breadcrumb__list-item_active"> GS Гусев </li>
      </ol>
    </section>

    <MainMenu></MainMenu>
  </div>
</template>

<script>

import MainMenu from '../components/MainMenu'

export default {
  name: 'HomeKGD',

  components: {
    MainMenu
  }
}
</script>

<style lang="scss" scoped>

@import '../assets/scss/home.scss';

.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

</style>
