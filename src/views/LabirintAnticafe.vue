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
    <section class="gs-container gs-container_center gs-container_padding-bottom">
        <div class="gs-thumbnail">
            <img class="gs-thumbnail__image" src="../assets/img/labirint-anticafe.jpg" alt="Антикафе «Лабиринт»">
            <div class="gs-thumbnail__caption gs-thumbnail__caption_text-center">
                <p>
                    В лабиринте можно играть не только в прятки. Здесь можно петь, резаться в sнастольные теннис, футбол, хоккей и приставки. 
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

  </div>
</template>

<script>

import CallButton from '../components/CallButton'

export default {
  name: 'LabirintAnticafe',
  props: ['title'],
  created () {
    document.title = this.title
  },
  components: {
    CallButton
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

@import '../assets/scss/labirint-anticafe.scss'

</style>
