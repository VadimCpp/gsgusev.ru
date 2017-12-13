<template>
  <div class="taxi-v-kaliningrade">

    <!-- Breadcrumb -->
    <section class="gs-container gs-container_center">
      <ol class="gs-breadcrumb">
        <li class="gs-breadcrumb__list-item"> <router-link class="gs-breadcrumb__link" :to="{ name: 'Home' }"> GS Гусев </router-link> </li>
        <li class="gs-breadcrumb__list-item gs-breadcrumb__list-item_active">
            Такси в
            <span class="gs-breadcrumb__visible-small-text"> Кгд </span>
            <span class="gs-breadcrumb__hidden-small-text"> Калининграде </span>
        </li>
      </ol>
    </section>

    <!-- Thumbnail -->
    <section class="gs-container gs-container_center gs-container_padding-bottom">
        <h3>Таксомоторные предприятия</h3>
        <p>
            В Калининграде с такси попроще.
            Тут пусть пока повисит пара проверенных номеров.
        </p>

        <!-- Thumbnail -->
        <div class="gs-thumbnail">
            <div class="gs-thumbnail__caption gs-thumbnail__caption_text-center">
                <h4> Maxim </h4>
                <p> 8 (4012) 999-666 </p>
                <a href="tel:84012999666" class="gs-call-button">
                    <i class="gs-icon-phone"> </i>
                    Позвонить
                </a>
            </div>
        </div>
        <br>

        <!-- Thumbnail -->
        <div class="gs-thumbnail">
            <div class="gs-thumbnail__caption gs-thumbnail__caption_text-center">
                <h4> Везёт </h4>
                <p> 8 (4012) 666-111 </p>
                <a href="tel:84012666111" class="gs-call-button">
                    <i class="gs-icon-phone"> </i>
                    Позвонить
                </a>
            </div>
        </div>

        <h3>Частный извоз</h3>
        <p>
            Вы верите, что женщины умеют водить авто?
        </p>

        <!-- Thumbnail -->
        <div class="gs-thumbnail">
            <div class="gs-thumbnail__caption gs-thumbnail__caption_text-center">
                <h4> Татьяна </h4>
                <p> 8 (921) 712-84-20 </p>
                <a href="tel:89217128420" class="gs-call-button">
                    <i class="gs-icon-phone"> </i>
                    Позвонить
                </a>
            </div>
        </div>

    </section>

  </div>
</template>

<script>
export default {
  name: 'TaksiVKaliningrade',
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

@import '../assets/scss/taxi-v-kaliningrade.scss';

</style>
