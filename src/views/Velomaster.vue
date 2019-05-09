<template>
  <div class="velomasterskaya">

    <!-- Breadcrumb -->
    <section class="gs-container gs-container_center">
      <ol class="gs-breadcrumb">
        <li class="gs-breadcrumb__list-item"> <router-link class="gs-breadcrumb__link" :to="{ name: 'Home', params: { city: $route.params.city } }"> GS Гусев </router-link> </li>
        <li class="gs-breadcrumb__list-item gs-breadcrumb__list-item_active"> Веломастерская </li>
      </ol>
    </section>

    <!-- Thumbnail -->
    <transition name="fade" appear>
      <section class="gs-container gs-container_center gs-container_padding-bottom">
          <div class="gs-thumbnail">
              <img class="gs-thumbnail__image" src="../assets/img/velomasterskaya.jpg" alt="Веломастер">
              <div class="gs-thumbnail__caption gs-thumbnail__caption_text-center">
                  <p>
                      Самый крутой велосервис в Калининграде. Есть все инструменты. Есть запчасти. Есть умелые руки. Работают профессионалы. 
                  </p>
                  <p>
                      ВК: <a href="https://vk.com/veloservicekgd" class="gs-link"> https://vk.com/veloservicekgd</a> <br>
                  </p>
                  <h4>Велосервис</h4>
                  <p>+7 (4012) 33 72 77</p>
                  <CallButton phone="+74012337277"/>
              </div>
          </div>
      </section>
    </transition>

  </div>
</template>

<script>

import CallButton from '../components/CallButton'

export default {
  name: 'velomasterskaya',
  components: {
    CallButton
  }
}
</script>

<style lang="scss" scoped>

@import '../assets/scss/velomasterskaya.scss';

.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

</style>
