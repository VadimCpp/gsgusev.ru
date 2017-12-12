<template>
  <div class="admin-poselka">
    <!-- Header -->
    <header class="gs-header">
        <div class="gs-header__veil"></div>
        <div class="gs-header__image"></div>
    </header>

    <!-- Breadcrumb -->
    <section class="gs-container gs-container_center">
        <ol class="gs-breadcrumb">
            <li class="gs-breadcrumb__list-item"> <router-link class="gs-breadcrumb__link" :to="{ name: 'Home' }"> GS Гусев </router-link> </li>
            <li class="gs-breadcrumb__list-item gs-breadcrumb__list-item_active"> Администратор <span class="gs-breadcrumb__hidden-small-text"> поселка</span> </li>
        </ol>
    </section>

    <!-- Well -->
    <section class="gs-container gs-container_center">
        <p class="gs-well">
            Администраторы поселка - золотые люди! Они все знают и всегда помогут, если вы окажетесь
            в трудной жизненной ситуации. И даже не будут обижаться, если вы на следующий день
            пройдете мимо, не здороваясь.
            Есть маленькое "но" - время работы администратора:
            8.00 - 20.00
        </p>
    </section>

    <!-- Thumbnail -->
    <section class="gs-container gs-container_center">
        <div class="gs-thumbnail">
            <div class="gs-thumbnail__caption gs-thumbnail__caption_text-center">
                <h4>Администратор</h4>
                <p>8 (911) 490-08-41</p>
                <a href="tel:89114900841" class="gs-call-button">
                    <i class="gs-icon-phone"> </i>
                    Позвонить
                </a>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="gs-footer">
        <div class="gs-footer__veil"></div>
        <div class="gs-footer__image_land"></div>
        <div class="gs-footer__image"></div>
    </footer>

  </div>
</template>

<script>
export default {
  name: 'AdminPoselka',
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

@import '../assets/scss/admin-poselka.scss';

</style>
