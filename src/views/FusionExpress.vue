<template>
  <div class="fusion-express">

    <!-- Breadcrumb -->
    <section class="gs-container gs-container_center">
      <ol class="gs-breadcrumb">
        <li class="gs-breadcrumb__list-item"> <router-link class="gs-breadcrumb__link" :to="{ name: 'Home', params: { city: $route.params.city } }"> GS Гусев </router-link> </li>
        <li class="gs-breadcrumb__list-item gs-breadcrumb__list-item_active"> Кафе «Фьюжн экспресс» </li>
      </ol>
    </section>

    <!-- Thumbnail -->
    <transition name="fade" appear>
      <section class="gs-container gs-container_center gs-container_padding-bottom">
          <div class="gs-thumbnail">
              <img class="gs-thumbnail__image" src="../assets/img/fusion-logo.png" alt="Кафе «Фьюжн экспресс»">
              <div class="gs-thumbnail__caption gs-thumbnail__caption_text-center">
                  <p>
                      Кафе паназитской кухни, очень вкусно и сытно. Не жди пока приготовят, а позвони и закажи заранее.
                  </p>
                  <p>
                      Ежедневно с 10-00 до 22-00 на Горького, 23А <br>
                  </p>
                  <p>
                      Сайт: <a href="http://fusion-ex.su/" class="gs-link"> http://fusion-ex.su/ </a> <br>
                  </p>
                  <h4>Заказ</h4>
                  <p>8 (4012) 52-44-71</p>
                  <CallButton phone="84012524471"/>
              </div>
          </div>
      </section>
    </transition>

  </div>
</template>

<script>

import CallButton from '../components/CallButton'

export default {
  name: 'FusionExpress',
  components: {
    CallButton
  }
}
</script>

<style lang="scss" scoped>

@import '../assets/scss/fusion-express.scss';

.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

</style>
