<template>
  <div class="avtoprokat39">

    <!-- Breadcrumb -->
    <section class="gs-container gs-container_center">
      <ol class="gs-breadcrumb">
        <li class="gs-breadcrumb__list-item"> <router-link class="gs-breadcrumb__link" :to="{ name: 'Home', params: { city: $route.params.city } }"> GS Гусев </router-link> </li>
        <li class="gs-breadcrumb__list-item gs-breadcrumb__list-item_active"> Автопрокат </li>
      </ol>
    </section>

    <!-- Thumbnail -->
    <transition name="fade" appear>
      <section class="gs-container gs-container_center gs-container_padding-bottom">
          <div class="gs-thumbnail">
              <!-- <img class="gs-thumbnail__image" src="../assets/img/fusion-logo.png" alt="Кафе «Фьюжн экспресс»"> -->
              <div class="gs-thumbnail__caption gs-thumbnail__caption_text-center">
                  <p>
                      Отличный автопрокат, который доставит вам автомобиль прямо к дому и всегда на связи.
                  </p>
                  <p>
                      Сайт: <a href="http://avtoprokat39.ru/" class="gs-link"> http://avtoprokat39.ru/ </a> <br>
                  </p>
                  <h4>Дмитрий</h4>
                  <p>+7 (911) 454-01-90</p>
                  <CallButton phone="+79114540190"/>
              </div>
          </div>
      </section>
    </transition>

  </div>
</template>

<script>

import CallButton from '../components/CallButton'

export default {
  name: 'Avtoprokat39',
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
