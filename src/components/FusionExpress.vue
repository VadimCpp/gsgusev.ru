<template>
  <div class="fusion-express">

    <!-- Breadcrumb -->
    <section class="gs-container gs-container_center">
      <ol class="gs-breadcrumb">
        <li class="gs-breadcrumb__list-item"> <router-link class="gs-breadcrumb__link" :to="{ name: 'Home' }"> GS Гусев </router-link> </li>
        <li class="gs-breadcrumb__list-item gs-breadcrumb__list-item_active"> Кафе «Фьюжн экспресс» </li>
      </ol>
    </section>

    <!-- Thumbnail -->
    <section class="gs-container gs-container_center gs-container_padding-bottom">
        <div class="gs-thumbnail">
            <img class="gs-thumbnail__image" src="img/fusion-logo.png" alt="Кафе «Фьюжн экспресс»">
            <div class="gs-thumbnail__caption gs-thumbnail__caption_text-center">
                <p>
                    Кафе паназитской кухни, очень вкусно и сытно. Не жди пока приготовят, а позвони и закажи заранее.
                </p>
                <p>
                    Ежедневно с 10-00 до 22-00 на Горького, 23А <br>
                </p>
                <p>
                    Сайт: <a href="http://fusion-ex.su/" class="gs-link"> http://fusion-ex.su/ </a> <br>
                </p>
                <h4>Заказ</h4>
                <p>8 (4012) 52-44-71</p>
                <a href="tel:84012524471" class="gs-call-button">
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
  name: 'FusionExpress',
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

@import '../assets/scss/fusion-express.scss';

</style>
