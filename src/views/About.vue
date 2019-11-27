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
            <li>
              Осипов Алексей - <a href="https://github.com/RuBrain"> GitHub </a>
            </li>
            <li>
              Самуйлов Виталий - <a href="https://github.com/aerovir"> GitHub </a>
            </li>
            <li>
              Волков Илья - <a href="https://github.com/ilvolkov"> GitHub </a>
            </li>
            <li>
              Горкольцев Глеб - <a href="https://github.com/Fedya-Mercuriev"> GitHub </a>
            </li>
            <li>
              Навасардян Александр - <a href="https://github.com/navacar"> GitHub </a>
            </li>
            <li>
              Ричард Кем - <a href="https://github.com/s0ull3ss"> GitHub </a>
            </li>
            <li>
              Тишаков Никита - <a href="https://github.com/starscreamnik"> GitHub </a>
            </li>
            <li>
              Романов Игорь - <a href="https://github.com/Nazeebo"> GitHub </a>
            </li>
            <li>
              Лукьянов Станислав - <a href="https://github.com/Waaaaaaaake"> GitHub </a>
            </li>
            <li>
              Геннадий Агашков - <a href="https://github.com/GennadyAgashkov"> GitHub </a>
            </li>
            <li>
              Терехин Александр - <a href="https://github.com/Abded"> GitHub </a>
            </li>
            <li>
              Брагин Борис - <a href="https://github.com/thinkjazz"> GitHub </a>
            </li>
            <li>
              Сивидов Антон - <a href="https://github.com/Tofan93"> GitHub </a>
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
