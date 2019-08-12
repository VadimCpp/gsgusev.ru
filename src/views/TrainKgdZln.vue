<template>
  <div class="TrainKgdZln">

    <!-- Breadcrumb -->
    <section class="gs-container gs-container_center">
      <ol class="gs-breadcrumb">
        <li class="gs-breadcrumb__list-item"> <router-link class="gs-breadcrumb__link" :to="{ name: 'Home', params: { city: $route.params.city } }"> GS Гусев </router-link> </li>
        <li class="gs-breadcrumb__list-item gs-breadcrumb__list-item_active"> Калининград-Зеленоградск </li>
      </ol>
    </section>

    <!-- Thumbnail -->
    <transition name="fade" appear>
      <section class="gs-container gs-container_center gs-container_padding-bottom">
          <div class="gs-thumbnail">
              <img class="gs-thumbnail__image" src="../assets/img/train.jpg" alt="Электричка">
              <div class="gs-thumbnail__caption gs-thumbnail__caption_text-center">
                  <h4>Справка ж/д вокзала</h4>
                  <p>+7 (4012) 600-888</p>
                  <CallButton phone="+74012600888"/>
              </div>
          </div>          
          <div style="overflow: scroll">
              <iframe frameborder="0" style="-moz-box-shadow: 0 2px 3px rgba(0, 0, 0, 0.5);
                -webkit-box-shadow: 0 2px 3px rgba(0, 0, 0, 0.5); box-shadow: 0 2px 3px rgba(0, 0, 0, 0.5);
                overflow: hidden; border: 0; width: 700px; height: 350px;" 
                src="https://rasp.yandex.ru/informers/search/?fromId=s9623138&amp;toId=c20139&amp;size=5&amp;color=1">
                </iframe>
          </div>
      </section>
    </transition>

  </div>
</template>

<script>

import CallButton from '../components/CallButton'

export default {
  beforeCreate () {
    /**
     * API Расписание рейсов между станциями, параметры запроса
     * https://yandex.ru/dev/rasp/doc/reference/schedule-point-point-docpage/
     */
    const baseurl = 'https://api.rasp.yandex.net/v3.0/search/'
    const apikey = '9e27ac30-1e85-4024-a954-0eb5a8eb7816'
    const from = 's9612014' // https://rasp.yandex.ru/station/9612014/?type=suburban // Кутузово-Новое
    const to = 's9611997' // https://rasp.yandex.ru/station/9611997/?type=suburban // Зеленоградск-новый
    const lang = 'ru'
    const url = `${baseurl}?apikey=${apikey}&from=${from}&to=${to}&lang=${lang}`

    console.log('fetch data from url: ', url)

    fetch(url)
      .then(
        function (response) {
          if (response.status !== 200) {
            console.log('Looks like there was a problem. Status Code: ' +
              response.status)
            return
          }

          // Examine the text in the response
          response.json().then(function (data) {
            console.log(data)
          })
        }
      )
      .catch(function (err) {
        console.log('Fetch Error :-S', err)
      })
  },
  name: 'TrainKgdZln',
  components: {
    CallButton
  }
}
</script>

<style lang="scss" scoped>

@import '../assets/scss/train.scss';

.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

</style>
