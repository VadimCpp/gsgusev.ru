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
        В Калининграде действует Яндекс такси.
      </p>

      <h3>Частный водитель</h3>
      <p>
        Поездки в Балтийск, в Зеленоградск, а возможно и в Гусев.
      </p>      

      <!-- Thumbnail -->
      <div class="gs-thumbnail">
          <div class="gs-thumbnail__caption gs-thumbnail__caption_text-center">
              <h4> Татьяна </h4>              
              <p> 8 (981) 450-82-15 </p>
              <p><CallButton phone="89814508215"/></p>
              <p><SocialButton vk="https://vk.com/tan_chik"/></p>
          </div>
      </div>
    </section>

  </div>
</template>

<script>

import CallButton from '../components/CallButton'
import SocialButton from '../components/SocialButton'

export default {
  name: 'TaksiVKaliningrade',
  components: {
    CallButton,
    SocialButton
  }
}
</script>

<style lang="scss" scoped>

@import '../assets/scss/taxi-v-kaliningrade.scss';

.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

</style>
