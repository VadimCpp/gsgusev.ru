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
            <router-link :to="{ name: 'BusGusevKgd' }" class="gs-main-menu__link"> 
                Автобус Гусев-Калининград 
                <i class="gs-icon-angle-right"> </i> 
            </router-link>
            <a href="bus_kgd_gusev.html" class="gs-main-menu__link" data-city="gusev kaliningrad"> Автобус Калининград-Гусев <i class="gs-icon-angle-right"> </i> </a>
            <a href="bus_gusev_poselok.html" class="gs-main-menu__link" data-city="gusev"> Автобус Гусев-Поселок <i class="gs-icon-angle-right"> </i> </a>
            <a href="bus_poselok_gusev.html" class="gs-main-menu__link" data-city="gusev"> Автобус Поселок-Гусев <i class="gs-icon-angle-right"> </i> </a>
            <router-link :to="{ name: 'AdminPoselka' }" class="gs-main-menu__link"> 
                Администратор поселка 
                <i class="gs-icon-angle-right"> </i> 
            </router-link>
            <a href="admin_poselka.html" class="gs-main-menu__link" data-city="gusev"> Администратор поселка <i class="gs-icon-angle-right"> </i> </a>
            <a href="voda.html" class="gs-main-menu__link" data-city="gusev"> Заказ воды «Айсберг» <i class="gs-icon-angle-right"> </i> </a>
            <a href="kino_lumen.html" class="gs-main-menu__link" data-city="gusev"> Кино &laquo;Люмен Фильм&raquo; <i class="gs-icon-angle-right"> </i> </a>
            <a href="karta_poselka.html" class="gs-main-menu__link" data-city="gusev"> Карта поселка <i class="gs-icon-angle-right"> </i> </a>
            <a href="taxi_v_guseve.html" class="gs-main-menu__link" data-city="gusev"> Такси в Гусеве <i class="gs-icon-angle-right"> </i> </a>
            <a href="taxi_v_kaliningrade.html" class="gs-main-menu__link" data-city="kaliningrad"> Такси в Калининграде <i class="gs-icon-angle-right"> </i> </a>
            <a href="perevozka_divana.html" class="gs-main-menu__link" data-city="gusev"> Перевозка ваших вещей <i class="gs-icon-angle-right"> </i> </a>
            <a href="gusev_fok.html" class="gs-main-menu__link" data-city="gusev"> ФОК города Гусева <i class="gs-icon-angle-right"> </i> </a>
            <a href="kebab.html" class="gs-main-menu__link" data-city="gusev"> Кафе #КЕБАБ <i class="gs-icon-angle-right"> </i> </a>
            <a href="fusion_express.html" class="gs-main-menu__link" data-city="kaliningrad"> Кафе &laquo;Фьюжн экспресс&raquo; <i class="gs-icon-angle-right"> </i> </a>
            <router-link :to="{ name: 'About' }" class="gs-main-menu__link"> 
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
  },
  render () {
  }
}
</script>

<style lang="scss" scoped>

@import '../assets/scss/home.scss';

</style>
