<template>
  <div class="taxi-v-guseve">

    <!-- Breadcrumb -->
    <section class="gs-container gs-container_center">
      <ol class="gs-breadcrumb">
        <li class="gs-breadcrumb__list-item"> <router-link class="gs-breadcrumb__link" :to="{ name: 'Home' }"> GS Гусев </router-link> </li>
        <li class="gs-breadcrumb__list-item gs-breadcrumb__list-item_active"> Такси в Гусеве </li>
      </ol>
    </section>

    <section class="gs-container gs-container_center gs-container_padding-bottom">

        <h3>Таксомоторные предприятия</h3>
        <p>
            В таксопарках Гусева нет оповещения клиента о том, что машина подъехала. Поэтому водители ожидают ровно 5 минут и уезжают. Будьте бдительны.
        </p>

        <!-- Thumbnail -->
        <div class="gs-thumbnail">
            <div class="gs-thumbnail__caption gs-thumbnail__caption_text-center">
                <h4> Омега </h4>
                <p> 8 (40143) 3-43-30 </p>
                <CallButton phone="84014334330"/>
            </div>
        </div>
        <br>

        <!-- Thumbnail -->
        <div class="gs-thumbnail">
            <div class="gs-thumbnail__caption gs-thumbnail__caption_text-center">
                <h4> Спартак </h4>
                <p> 8 (40143) 3-46-30 </p>
                <CallButton phone="84014334630"/>
            </div>
        </div>

        <h3>Частный извоз</h3>
        <p>
            В этом разделе добавлены водители, с которыми хочется ездить.
        </p>

        <!-- Thumbnail -->
        <div class="gs-thumbnail">
            <div class="gs-thumbnail__caption gs-thumbnail__caption_text-center">
                <h4> Андрей </h4>
                <p> 8 (921) 005-77-99 </p>
                <CallButton phone="89210057799"/>
            </div>
        </div>
    </section>

  </div>
</template>

<script>

import CallButton from '../components/CallButton'

export default {
  name: 'TaksiVGuseve',
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

@import '../assets/scss/taxi-v-guseve.scss';

</style>
