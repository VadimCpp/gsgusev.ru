<template>
  <div class="labirint-anticafe">

    <!-- Breadcrumb -->
    <section class="gs-container gs-container_center">
      <ol class="gs-breadcrumb">
        <li class="gs-breadcrumb__list-item"> <router-link class="gs-breadcrumb__link" :to="{ name: 'Home' }"> GS Гусев </router-link> </li>
        <li class="gs-breadcrumb__list-item gs-breadcrumb__list-item_active"> Антикафе «Лабиринт» </li>
      </ol>
    </section>

    <!-- Thumbnail -->
    <transition name="fade" appear>
      <section class="gs-container gs-container_center gs-container_padding-bottom">
          <div class="gs-thumbnail">
              <img class="gs-thumbnail__image" src="../assets/img/labirint-anticafe.jpg" alt="Антикафе «Лабиринт»">
              <div class="gs-thumbnail__caption gs-thumbnail__caption_text-center">
                  <p>
                      В лабиринте можно играть не только в прятки. Здесь можно петь, резаться в настольные теннис, футбол, хоккей и приставки.
                      Веселиться, читать книги, играть с друзьями во множество настольных игр. Работать в комфортных условиях с нескончаемым кофе и печеньками, приглашать прекрасных леди курить кальян, прыгать у бильярдного стола, пока дети развлекаются с аниматором.
                  </p>
                  <p>
                      График работы:
                      <ul class="gs-container__list">
                        <li> понедельник-четверг: 16:00 до 02:00; </li>
                        <li> пятница: 14:00-04:00; </li>
                        <li> суббота: 13:00-04:00; </li>
                        <li> воскресенье: 12:00-02:00; </li>
                      </ul>
                  </p>
                  <p>
                      Сайт: <a href="https://vk.com/antilabirint" class="gs-link"> https://vk.com/antilabirint </a> <br>
                  </p>
                  <h4>Бронь столов</h4>
                  <p>+7 (4012) 52 22 19</p>
                  <CallButton phone="+74012522219"/>
              </div>
          </div>
      </section>
    </transition>

  </div>
</template>

<script>

import CallButton from '../components/CallButton'

export default {
  name: 'LabirintAnticafe',
  components: {
    CallButton
  }
}
</script>

<style lang="scss" scoped>

@import '../assets/scss/labirint-anticafe.scss';

.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

</style>
