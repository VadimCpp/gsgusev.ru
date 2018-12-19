<template>
  <div class="artika">

    <!-- Breadcrumb -->
    <section class="gs-container gs-container_center">
        <ol class="gs-breadcrumb">
            <li class="gs-breadcrumb__list-item"> <router-link class="gs-breadcrumb__link" :to="{ name: 'Home', params: { city: $route.params.city } }"> GS Гусев </router-link> </li>
            <li class="gs-breadcrumb__list-item gs-breadcrumb__list-item_active"> <span class="gs-breadcrumb__hidden-small-text"> Арт-пространство </span> АРТика </li>
        </ol>
    </section>

    <!-- Well -->
    <section class="gs-container gs-container_center">
        <p class="gs-well">
            <img class="gs-thumbnail__image" src="../assets/img/artika.jpg" alt="#КЕБАБ">
            АРТика - это сообщество людей всех возрастов, которые стремятся интересно и с пользой проводить время. Здесь вас ждут:     
            <ul class="gs-container__list">
                <li> ✔ психологические, интеллектуальные игры  </li>
                <li> ✔ мастер-классы, лекции, семинары </li>
                <li> ✔ музыкальные, литературные вечера </li>
                <li> ✔ артхаус киноклуб </li>
                <li> ✔ интересные знакомства </li>
                <li> ✔ свободное общение </li>
                <li> ✔ уютная обстановка </li>
            </ul>
            Адрес: г.Гусев, ул.Тимирязева, 8 <br>  <br>
            Расписание мероприятий и самые актуальные новости в нашей группе VK и Instagram: <br>
            <a href="https://vk.com/artika_gusev">vk.com/artika_gusev</a> <br>
            <a href="https://instagram.com/artika_gusev">instagram.com/artika_gusev</a> <br>
        </p>

    </section>

    <!-- Thumbnail -->
    <section class="gs-container gs-container_center">
        <div class="gs-thumbnail">
            <div class="gs-thumbnail__caption gs-thumbnail__caption_text-center">
                <h4>Михаил</h4>
                <p>Звоните по вопросам посещения</p>
                <p>8 (921) 616-51-10</p>
                <CallButton phone="89216165110"/>
            </div>
        </div>
    </section>

    <!-- Thumbnail -->
    <section class="gs-container gs-container_center gs-container_padding-bottom">
        <div class="gs-thumbnail">
            <div class="gs-thumbnail__caption gs-thumbnail__caption_text-center">
                <h4>Алексей</h4>
                <p>Звоните по вопросам сотрудничества</p>
                <p>8 (963) 29-33-218</p>
                <CallButton phone="89632933218"/>
            </div>
        </div>
    </section>

  </div>
</template>

<script>

import CallButton from '../components/CallButton'

export default {
  name: 'Artika',
  components: {
    CallButton
  }
}
</script>

<style lang="scss" scoped>

@import '../assets/scss/artika.scss';

.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

</style>
