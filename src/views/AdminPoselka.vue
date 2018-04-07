<template>
  <div class="admin-poselka">

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
                <CallButton phone="89114900841"/>
            </div>
        </div>
    </section>

  </div>
</template>

<script>

import CallButton from '../components/CallButton'

export default {
  name: 'AdminPoselka',
  components: {
    CallButton
  }
}
</script>

<style lang="scss" scoped>

@import '../assets/scss/admin-poselka.scss';

.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

</style>
