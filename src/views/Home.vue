<template>

    <div class="home">

    <!-- Breadcrumb -->
    <section class="gs-container gs-container_center">
      <ol class="gs-breadcrumb">
        <li class="gs-breadcrumb__list-item gs-breadcrumb__list-item_active"> GS Гусев </li>
      </ol>
    </section>

    <!-- Main menu -->
    <transition name="fade" appear>
      <section class="gs-container gs-container_center gs-container_padding-bottom">
        <div class="gs-main-menu" :class="$route.params.cityName" id="main-menu">
          <router-link :to="{ name: 'BusGusevKgd' }" class="gs-main-menu__link" data-city="gusev kaliningrad">
            Автобус Гусев-Калининград
            <i class="gs-icon-angle-right"> </i>
          </router-link>
          <router-link :to="{ name: 'BusKgdGusev', params: { city: $route.params.city } }" class="gs-main-menu__link" data-city="gusev kaliningrad">
            Автобус Калининград-Гусев
            <i class="gs-icon-angle-right"> </i>
          </router-link>
          <router-link :to="{ name: 'BusGusevPoselok', params: { city: $route.params.city } }" class="gs-main-menu__link" data-city="gusev">
            Автобус Гусев-Поселок
            <i class="gs-icon-angle-right"> </i>
          </router-link>
          <router-link :to="{ name: 'BusPoselokGusev', params: { city: $route.params.city } }" class="gs-main-menu__link" data-city="gusev">
            Автобус Поселок-Гусев
            <i class="gs-icon-angle-right"> </i>
          </router-link>
          <router-link :to="{ name: 'AdminPoselka', params: { city: $route.params.city } }" class="gs-main-menu__link" data-city="gusev">
            Администратор поселка
            <i class="gs-icon-angle-right"> </i>
          </router-link>
          <router-link :to="{ name: 'Voda', params: { city: $route.params.city } }" class="gs-main-menu__link" data-city="gusev">
            Заказ воды «Айсберг»
            <i class="gs-icon-angle-right"> </i>
          </router-link>
          <router-link :to="{ name: 'KinoLumen', params: { city: $route.params.city } }" class="gs-main-menu__link" data-city="gusev">
            Кино «Люмен Фильм»
            <i class="gs-icon-angle-right"> </i>
          </router-link>
          <router-link :to="{ name: 'KartaPoselka', params: { city: $route.params.city } }" class="gs-main-menu__link" data-city="gusev">
            Карта поселка
            <i class="gs-icon-angle-right"> </i>
          </router-link>
          <router-link :to="{ name: 'TaxiVGuseve', params: { city: $route.params.city } }" class="gs-main-menu__link" data-city="gusev">
            Такси в Гусеве
            <i class="gs-icon-angle-right"> </i>
          </router-link>
          <router-link :to="{ name: 'TaxiVKaliningrade', params: { city: $route.params.city } }" class="gs-main-menu__link" data-city="kaliningrad">
            Такси в Калининграде
            <i class="gs-icon-angle-right"> </i>
          </router-link>
		  <router-link :to="{ name: 'Avtoprokat39', params: { city: $route.params.city } }" class="gs-main-menu__link" data-city="kaliningrad">
            Прокат авто
            <i class="gs-icon-angle-right"> </i>
          </router-link>
          <router-link :to="{ name: 'GusevFok', params: { city: $route.params.city } }" class="gs-main-menu__link" data-city="gusev">
            ФОК города Гусева
            <i class="gs-icon-angle-right"> </i>
          </router-link>
          <router-link :to="{ name: 'Kebab', params: { city: $route.params.city } }" class="gs-main-menu__link" data-city="gusev">
            Кафе #КЕБАБ
            <i class="gs-icon-angle-right"> </i>
          </router-link>
          <router-link :to="{ name: 'FusionExpress', params: { city: $route.params.city } }" class="gs-main-menu__link" data-city="kaliningrad">
            Кафе «Фьюжн экспресс»
            <i class="gs-icon-angle-right"> </i>
          </router-link>
          <router-link :to="{ name: 'LabirintAnticafe', params: { city: $route.params.city } }" class="gs-main-menu__link" data-city="kaliningrad">
            Антикафе «Лабиринт»
            <i class="gs-icon-angle-right"> </i>
          </router-link>
          <router-link :to="{ name: 'Velomaster', params: { city: $route.params.city } }" class="gs-main-menu__link" data-city="kaliningrad">
            Веломастерская 🚲
            <i class="gs-icon-angle-right"> </i>
          </router-link>
          <router-link :to="{ name: 'About', params: { city: $route.params.city } }" class="gs-main-menu__link" data-city="gusev kaliningrad">
            О нас
            <i class="gs-icon-angle-right"> </i>
          </router-link>
        </div>
        <div class="gs-main-menu">
          <a href="https://t.me/gsgusev" class="gs-main-menu__link gs-main-menu__link_telegram gs-main-menu__link_margin-top">
            <i class="gs-icon-telegram"> </i>
            Наш Telegram чат
          </a>
        </div>
      </section>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'Home'
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
