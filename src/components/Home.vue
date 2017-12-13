<template>
  <div class="home">

    <!-- Breadcrumb -->
    <section class="gs-container gs-container_center">
        <ol class="gs-breadcrumb">
            <li class="gs-breadcrumb__list-item gs-breadcrumb__list-item_active"> GS Гусев </li>
        </ol>
    </section>

    <!-- Off-canvas -->
    <div class="gs-off-canvas" id="off-canvas">

        <div class="gs-off-canvas__bar" id="off-canvas-bar">
            <p class="gs-off-canvas__label" id="label-city"> Город </p>
            <hr>
            <button class="gs-off-canvas__btn active" id="gusev-btn"> <i class="gs-icon-ok"> </i> Гусев</button>
            <button class="gs-off-canvas__btn" id="kgd-btn"> <i class="gs-icon-ok"> </i> Калининград</button>
        </div>
    </div>

    <!-- Main menu -->
    <section class="gs-container gs-container_center gs-container_padding-bottom">
        <div class="gs-main-menu gusev" id="main-menu">
            <router-link :to="{ name: 'BusGusevKgd' }" class="gs-main-menu__link" data-city="gusev kaliningrad"> 
                Автобус Гусев-Калининград 
                <i class="gs-icon-angle-right"> </i> 
            </router-link>
            <router-link :to="{ name: 'BusKgdGusev' }" class="gs-main-menu__link" data-city="gusev kaliningrad"> 
                Автобус Калининград-Гусев 
                <i class="gs-icon-angle-right"> </i> 
            </router-link>
            <router-link :to="{ name: 'BusGusevPoselok' }" class="gs-main-menu__link" data-city="gusev"> 
                Автобус Гусев-Поселок 
                <i class="gs-icon-angle-right"> </i> 
            </router-link>
            <router-link :to="{ name: 'BusPoselokGusev' }" class="gs-main-menu__link" data-city="gusev"> 
                Автобус Поселок-Гусев 
                <i class="gs-icon-angle-right"> </i> 
            </router-link>
            <router-link :to="{ name: 'AdminPoselka' }" class="gs-main-menu__link" data-city="gusev"> 
                Администратор поселка 
                <i class="gs-icon-angle-right"> </i> 
            </router-link>
            <router-link :to="{ name: 'Voda' }" class="gs-main-menu__link" data-city="gusev"> 
                Заказ воды «Айсберг» 
                <i class="gs-icon-angle-right"> </i> 
            </router-link>
            <router-link :to="{ name: 'KinoLumen' }" class="gs-main-menu__link" data-city="gusev"> 
                Кино «Люмен Фильм» 
                <i class="gs-icon-angle-right"> </i> 
            </router-link>
            <router-link :to="{ name: 'KartaPoselka' }" class="gs-main-menu__link" data-city="gusev"> 
                Карта поселка 
                <i class="gs-icon-angle-right"> </i> 
            </router-link>
            <router-link :to="{ name: 'TaxiVGuseve' }" class="gs-main-menu__link" data-city="gusev"> 
                Такси в Гусеве 
                <i class="gs-icon-angle-right"> </i> 
            </router-link>
            <router-link :to="{ name: 'TaxiVKaliningrade' }" class="gs-main-menu__link" data-city="kaliningrad"> 
                Такси в Калининграде 
                <i class="gs-icon-angle-right"> </i> 
            </router-link>
            <router-link :to="{ name: 'PerevozkaDivana' }" class="gs-main-menu__link" data-city="gusev"> 
                Перевозка ваших вещей
                <i class="gs-icon-angle-right"> </i> 
            </router-link>
            <router-link :to="{ name: 'GusevFok' }" class="gs-main-menu__link" data-city="gusev"> 
                ФОК города Гусева
                <i class="gs-icon-angle-right"> </i> 
            </router-link>
            <router-link :to="{ name: 'Kebab' }" class="gs-main-menu__link" data-city="gusev"> 
                Кафе #КЕБАБ
                <i class="gs-icon-angle-right"> </i> 
            </router-link>
            <router-link :to="{ name: 'FusionExpress' }" class="gs-main-menu__link" data-city="gusev"> 
                Кафе «Фьюжн экспресс»
                <i class="gs-icon-angle-right"> </i> 
            </router-link>
            <router-link :to="{ name: 'About' }" class="gs-main-menu__link" data-city="gusev kaliningrad"> 
                О нас 
                <i class="gs-icon-angle-right"> </i> 
            </router-link>
        </div>
    </section>

  </div>
</template>

<script>
export default {
  name: 'Home',
  props: ['title'],
  created () {
    document.title = this.title
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

@import '../assets/scss/home.scss';

</style>
