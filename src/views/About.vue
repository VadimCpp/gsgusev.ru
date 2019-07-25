<template>
  <div class="about">

    <!-- Breadcrumb -->
    <section class="gs-container gs-container_center">
      <ol class="gs-breadcrumb">
        <li class="gs-breadcrumb__list-item"> <router-link class="gs-breadcrumb__link" :to="{ name: 'Home', params: { city: $route.params.city } }"> GS Гусев </router-link> </li>
        <li class="gs-breadcrumb__list-item gs-breadcrumb__list-item_active"> О нас </li>
      </ol>
    </section>

    <transition name="fade" appear>
      <section class="gs-container gs-container_center">
        <div class="gs-well">
          Наша команда:
          <ol>
            <li>
              Вадим Канинский - <a href="https://github.com/vadimcpp"> GitHub </a>
            </li>
            <li>
              Ярослав Карас - <a href="https://github.com/yarkaras"> GitHub </a>
            </li>
            <li>
              Листопад Евгений - <a href="https://github.com/gutal1n"> GitHub </a>
            </li>
            <li>
              Акимова Дарья - <a href="https://github.com/DaryaAkimova"> GitHub </a>
            </li>
            <li>
              Кокорин Юрий - <a href="https://github.com/YuryRudny"> GitHub </a>
            </li>
            <li>
              Уфрутов Сергей - <a href="https://github.com/Ufrutov"> GitHub </a>
            </li>
            <li>
              Кузьмин Сергей - <a href="https://github.com/cvalya"> GitHub </a>
            </li>
            <li>
              Углин Александр - <a href="https://github.com/AbsoluteBender"> GitHub </a>
            </li>
            <li>
              Дмитрий Ревякин - <a href="https://github.com/holdencaulf1eld"> GitHub </a>
            </li>
            <li>
              Савченко Александр - <a href="https://github.com/Nebula223"> GitHub </a>
            </li>
            <li>
              Полищук Антон - <a href="https://github.com/Sunantby"> GitHub </a>
            </li>
            <li>
              Гончарук Роман - <a href="https://github.com/RUBYsimpleMAN"> GitHub </a>
            </li>
          </ol>
        </div>
      </section>
    </transition>

    <section class="gs-container gs-container_center">
      <div class="gs-well gs-well_text-center">
        <p> Плохо работает сайт? <br> <a href="https://vk.com/vadimcpp"> Напишите программисту </a> </p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style lang="scss" scoped>

@import '../assets/scss/about.scss';

.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

</style>
