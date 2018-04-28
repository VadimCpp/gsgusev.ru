<template>
  <div class="taxi-v-guseve">

    <!-- Breadcrumb -->
    <section class="gs-container gs-container_center">
      <ol class="gs-breadcrumb">
        <li class="gs-breadcrumb__list-item"> <router-link class="gs-breadcrumb__link" :to="{ name: 'Home', params: { city: $route.params.city } }"> GS Гусев </router-link> </li>
        <li class="gs-breadcrumb__list-item gs-breadcrumb__list-item_active"> Такси в Гусеве </li>
      </ol>
    </section>

    <transition name="fade" appear>
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
    </transition>

  </div>
</template>

<script>

import CallButton from '../components/CallButton'

export default {
  name: 'TaksiVGuseve',
  components: {
    CallButton
  }
}
</script>

<style lang="scss" scoped>

@import '../assets/scss/taxi-v-guseve.scss';

.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

</style>
