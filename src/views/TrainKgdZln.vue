<template>
  <div class="TrainKgdZln">

    <!-- Breadcrumb -->
    <section class="gs-container gs-container_center">
      <ol class="gs-breadcrumb">
        <li class="gs-breadcrumb__list-item"> <router-link class="gs-breadcrumb__link" :to="{ name: 'Home', params: { city: $route.params.city } }"> GS Гусев </router-link> </li>
        <li class="gs-breadcrumb__list-item gs-breadcrumb__list-item_active"> Калининград-Зеленоградск </li>
      </ol>
    </section>

    <!-- Thumbnail -->
    <transition name="fade" appear>
      <section class="gs-container gs-container_center gs-container_padding-bottom">
          <div class="gs-thumbnail">
              <img class="gs-thumbnail__image" src="../assets/img/train.jpg" alt="Электричка">
              <div class="gs-thumbnail__caption gs-thumbnail__caption_text-center">
                  <div style="overflow: scroll">
                      <iframe frameborder="0" style="-moz-box-shadow: 0 2px 3px rgba(0, 0, 0, 0.5);
                       -webkit-box-shadow: 0 2px 3px rgba(0, 0, 0, 0.5); box-shadow: 0 2px 3px rgba(0, 0, 0, 0.5);
                       overflow: hidden; border: 0; width: 700px; height: 350px;" 
                       src="https://rasp.yandex.ru/informers/search/?fromId=s9623138&amp;toId=c20139&amp;size=5&amp;color=1">
                       </iframe>
                  </div>
                  <br>
                  <h4>Справка ж/д вокзала</h4>
                  <p>+7 (4012) 600-888</p>
                  <CallButton phone="+74012600888"/>
              </div>
          </div>
      </section>
    </transition>

  </div>
</template>

<script>

import CallButton from '../components/CallButton'

export default {
  name: 'TrainKgdZln',
  components: {
    CallButton
  }
}
</script>

<style lang="scss" scoped>

@import '../assets/scss/train.scss';

.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

</style>
