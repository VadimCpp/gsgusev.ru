<template>
  <div class="voda">

    <!-- Breadcrumb -->
    <section class="gs-container gs-container_center">
      <ol class="gs-breadcrumb">
        <li class="gs-breadcrumb__list-item"> <router-link class="gs-breadcrumb__link" :to="{ name: 'Home' }"> GS Гусев </router-link> </li>
        <li class="gs-breadcrumb__list-item gs-breadcrumb__list-item_active"> Заказ воды «Айсберг» </li>
      </ol>
    </section>

    <!-- Well -->
    <section class="gs-container gs-container_center">
        <p class="gs-well">
        <!-- Текст описания страницы-->
        К сожалению, вода в поселке иногда вызывает нарекания жителей. Так что удобнее ее заказывать. <br>
        Официальный сайт: <a href="http://www.iceberg-aqua.ru/" class="gs-main-menu__link"> http://www.iceberg-aqua.ru/</a>
        </p>
    </section>

    <!-- Thumbnail -->
    <section class="gs-container gs-container_center">
        <div class="gs-thumbnail">
            <div class="gs-thumbnail__caption gs-thumbnail__caption_text-center">
                <h4>Заказ воды «Айсберг»</h4>
                <p>8 (906) 236 69 95</p>
                <a href="tel:89062366995" class="gs-call-button">
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
  name: 'Voda',
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

@import '../assets/scss/voda.scss';

</style>
