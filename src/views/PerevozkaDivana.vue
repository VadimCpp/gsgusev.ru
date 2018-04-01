<template>
  <div class="perevozka-divana">

    <!-- Breadcrumb -->
    <section class="gs-container gs-container_center">
      <ol class="gs-breadcrumb">
        <li class="gs-breadcrumb__list-item"> <router-link class="gs-breadcrumb__link" :to="{ name: 'Home' }"> GS Гусев </router-link> </li>
          <li class="gs-breadcrumb__list-item gs-breadcrumb__list-item_active">
              Перевозка<span class="gs-breadcrumb__hidden-small-text"> ваших</span> вещей
          </li>
      </ol>
    </section>

    <!-- Thumbnail -->
    <transition name="fade" appear>
      <section class="gs-container gs-container_center gs-container_padding-bottom">
        <div class="gs-thumbnail">
          <img class="gs-thumbnail__image" src="../assets/img/ford_transit.jpg" alt="Ford Transit">
          <div class="gs-thumbnail__caption gs-thumbnail__caption_text-center">
              <p>
                  Вместительный Ford Transit безопасно доставит ваш груз в любую точку области.
              </p>
              <h4>Дмитрий</h4>
              <p>8 (921) 617-60-13</p>
              <CallButton phone="89216176013"/>
          </div>
        </div>
      </section>
    </transition>

  </div>
</template>

<script>

import CallButton from '../components/CallButton'

export default {
  name: 'PerevozkaDivana',
  components: {
    CallButton
  }
}
</script>

<style lang="scss" scoped>

@import '../assets/scss/perevozka-divana.scss';

</style>
