<template>
  <div class="velomaster">

    <!-- Breadcrumb -->
    <section class="gs-container gs-container_center">
      <ol class="gs-breadcrumb">
        <li class="gs-breadcrumb__list-item"> <router-link class="gs-breadcrumb__link" :to="{ name: 'Home', params: { city: $route.params.city } }"> GS Гусев </router-link> </li>
        <li class="gs-breadcrumb__list-item gs-breadcrumb__list-item_active"> Веломастер </li>
      </ol>
    </section>

    <!-- Thumbnail -->
    <transition name="fade" appear>
      <section class="gs-container gs-container_center gs-container_padding-bottom">
          <div class="gs-thumbnail">
              <img class="gs-thumbnail__image" src="../assets/img/velomaster.jpg" alt="Веломастер">
              <div class="gs-thumbnail__caption gs-thumbnail__caption_text-center">
                  <p>
                      Обычно веломастер работает в своей мастерской, а тут у нас есть веломастер, который может приехать к вам домой ❗
                  </p>
                  <p>
                    🚴🏽 "Приеду к вам домой, проведу диагностику велосипеда, и ремонт на месте, если это возможно." 👤
                  </p>
                  <p>
                      <b> Услуги </b>
                      <ul class="gs-container__list">
                        <li> ✅ смажу цепь </li>
                        <li> ✅ отрегулирую передачи </li>
                        <li> ✅ проверю тормоза </li>
                        <li> ✅ заклею пробитое колесо </li>
                        <li> ✅ проведу диагностику </li>
                        <li> ✅ помогу решить любую велопроблему </li>
                        <li> ✅ отрегулирую посадку </li>
                        <li> ✅ проконсультирую по всем веловопросам </li>
                        <li> ✅ почищу велосипед от грязи </li>
                      </ul>
                  </p>
                  <p>
                      ⚠️ экстренная велопомощь
                      Приеду в парк и заклею пробитое колесо <br> <br>                      
                      (600₽ выезд по Калининграду)
                  </p>
                  <p>
                      ВК: <a href="https://vk.com/valizel80" class="gs-link"> https://vk.com/valizel80</a> <br>
                  </p>
                  <h4>Валентин</h4>
                  <p>+7 (952) 11 83 726</p>
                  <CallButton phone="+79521183726"/>
              </div>
          </div>
      </section>
    </transition>

  </div>
</template>

<script>

import CallButton from '../components/CallButton'

export default {
  name: 'Velomaster',
  components: {
    CallButton
  }
}
</script>

<style lang="scss" scoped>

@import '../assets/scss/velomaster.scss';

.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

</style>
