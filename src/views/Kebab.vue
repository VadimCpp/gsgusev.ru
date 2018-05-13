<template>
  <div class="kebab">

    <!-- Breadcrumb -->
    <section class="gs-container gs-container_center">
      <ol class="gs-breadcrumb">
        <li class="gs-breadcrumb__list-item">
          <router-link class="gs-breadcrumb__link"
            :to="{ path: '/'+$route.params.city, params: { city: $route.params.city } }">
            GS Гусев
          </router-link>
        </li>
        <li class="gs-breadcrumb__list-item gs-breadcrumb__list-item_active"> Кафе #КЕБАБ </li>
      </ol>
    </section>

    <!-- Thumbnail -->
    <transition name="fade" appear>
      <section class="gs-container gs-container_center gs-container_padding-bottom">
        <div class="gs-thumbnail">
          <img class="gs-thumbnail__image" src="../assets/img/kebab.jpg" alt="#КЕБАБ">
          <div class="gs-thumbnail__caption gs-thumbnail__caption_text-center">
            <p>
                Хрустящие кебабы и шаверма, а также бодрящий и ароматный кофе! <br>
            </p>
            <p>
                Работаем ежедневно с 08-00 до 23-00 на Ленина, 21 <br>
            </p>
            <p>
                Ещё больше конкурсов и акций! Вступайте в паблик: <a href="https://vk.com/kebab_bomba" class="gs-link"> https://vk.com/kebab_bomba </a> <br>
            </p>
            <h4>Доставка</h4>
            <p>8 (906) 23-79-981</p>
            <CallButton phone="89062379981"/>
          </div>
        </div>
      </section>
    </transition>

  </div>
</template>

<script>

import CallButton from '../components/CallButton'

export default {
  name: 'Kebab',
  components: {
    CallButton
  }
}
</script>

<style lang="scss" scoped>

@import '../assets/scss/kebab.scss';

.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

</style>
