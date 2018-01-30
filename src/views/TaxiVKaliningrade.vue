<template>
  <div class="taxi-v-kaliningrade">

    <!-- Breadcrumb -->
    <section class="gs-container gs-container_center">
      <ol class="gs-breadcrumb">
        <li class="gs-breadcrumb__list-item"> <router-link class="gs-breadcrumb__link" :to="{ name: 'Home' }"> GS Гусев </router-link> </li>
        <li class="gs-breadcrumb__list-item gs-breadcrumb__list-item_active">
            Такси в
            <span class="gs-breadcrumb__visible-small-text"> Кгд </span>
            <span class="gs-breadcrumb__hidden-small-text"> Калининграде </span>
        </li>
      </ol>
    </section>

    <!-- Thumbnail -->
    <section class="gs-container gs-container_center gs-container_padding-bottom">
      <h3>Таксомоторные предприятия</h3>
      <p>
          В Калининграде с такси попроще.
          Тут пусть пока повисит пара проверенных номеров.
      </p>

      <!-- Thumbnail -->
      <div class="gs-thumbnail">
          <div class="gs-thumbnail__caption gs-thumbnail__caption_text-center">
              <h4> Maxim </h4>
              <p> 8 (4012) 999-666 </p>
              <CallButton phone="84012999666"/>
          </div>
      </div>
      <br>

      <!-- Thumbnail -->
      <div class="gs-thumbnail">
          <div class="gs-thumbnail__caption gs-thumbnail__caption_text-center">
              <h4> Везёт </h4>
              <p> 8 (4012) 666-111 </p>
              <CallButton phone="84012666111"/>
          </div>
      </div>
      <h3>Мобильные приложения</h3>
      <p>
        В Калининграде действиет Яндекс такси.       
      </p>
    </section>

  </div>
</template>

<script>

import CallButton from '../components/CallButton'

export default {
  name: 'TaksiVKaliningrade',
  props: ['title'],
  created () {
    document.title = this.title
  },
  components: {
    CallButton
  },
  watch: {
    title () {
      // only used when the title changes after page load
      document.title = this.title
    }
  }
}
</script>

<style lang="scss" scoped>

@import '../assets/scss/taxi-v-kaliningrade.scss';

</style>
