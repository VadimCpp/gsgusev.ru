<template>
  <div class="kino-lumen">

  <!-- Breadcrumb -->
  <section class="gs-container gs-container_center">
    <ol class="gs-breadcrumb">
    <li class="gs-breadcrumb__list-item"> <router-link class="gs-breadcrumb__link" :to="{ name: 'Home' }"> GS Гусев </router-link> </li>
    <li class="gs-breadcrumb__list-item gs-breadcrumb__list-item_active"> Кино «Люмен Фильм» </li>
    </ol>
  </section>

  <!-- Well -->
  <section class="gs-container gs-container_center">
    <div class="gs-well gs-well_text-center" id="schedule-block">
      <p> Расписание доступно по ссылке:
        <a href="http://lumenfilm.com/gusev/affishe">http://lumenfilm.com/gusev/affishe</a>
      </p>
      <!-- <p> TODO: враспарсить расписание </p> -->
      <!-- <h4><i class="gs-icon-spinner gs-icon-spin"> </i></h4> -->
    </div>
  </section>

  <!-- Thumbnail -->
  <section class="gs-container gs-container_center gs-container_padding-bottom">
    <div class="gs-thumbnail">
      <div class="gs-thumbnail__caption gs-thumbnail__caption_text-center">
        <h4>Кино &laquo;Люмен Фильм&raquo;</h4>
        <p>Расписание обновляется каждый четверг. Остались вопросы? Вот номер кинотеатра:</p>
        <p>8 (401) 433-71-71</p>
        <CallButton phone="84014337171"/>
      </div>
    </div>
  </section>

  </div>
</template>


<script>

import CallButton from '../components/CallButton'

//
// TODO: http://lumenfilm.com/gusev/affishe?
//

export default {
  name: 'KinoLumen',
  created () {
    // this.loadSchedule()
  },
  components: {
    CallButton
  }
  // loadSchedule () {
  //   //
  //   // TODO: refactor in vue style
  //   //

  //   //
  //   // https://stackoverflow.com/a/35970894/4222953
  //   //
  //   // var getJSON = function (url, callback) {
  //   //   var xhr = new XMLHttpRequest()
  //   //   xhr.open('GET', url, true)
  //   //   xhr.responseType = 'json'
  //   //   xhr.onload = function () {
  //   //     var status = xhr.status
  //   //     if (status === 200) {
  //   //       callback(null, xhr.response)
  //   //     } else {
  //   //       callback(status, xhr.response)
  //   //     }
  //   //   }
  //   //   xhr.onabort = function () {
  //   //     console.log('Прервано с кодом ' + xhr.status)
  //   //     var status = xhr.status
  //   //     callback(status, xhr.response)
  //   //   }
  //   //   xhr.onerror = function () {
  //   //     console.log('Ошибка ' + xhr.status)
  //   //     var status = xhr.status
  //   //     callback(status, xhr.response)
  //   //   }
  //   //   xhr.send()
  //   // }

  //   /**
  //    * @param {!Array} data - непустой массив ссылок на изображения расписания
  //    */
  //   // function processImagesList (data) {
  //   //   var value = ''
  //   //   data.forEach(function (path) {
  //   //     value += '<img class="gs-well__image" src="' + path + '" alt="' + path + '">'
  //   //   })

  //   //   var scheduleBlock = document.getElementById('schedule-block')
  //   //   scheduleBlock.innerHTML = value
  //   // }

  //   // function loadImagesList () {
  //   //   console.log('Грузим расписание...')

  //   //   //
  //   //   // NOTE!
  //   //   //
  //   //   // Тут костыль :(
  //   //   // На github.io нет бэкенда, по-этому ссылка прописана с доменным именем:
  //   //   // "http://gsgusev.ru/...", а не просто: "/scripts/kino_lumen.php"
  //   //   //
  //   //   // Чтобы тестировать работу скрипта во время разработки, ваш локальный сервер должен поддерживать PHP
  //   //   // Тут gulp browserSync не поможет, надо настроить Apache, nginx и т.д.
  //   //   //
  //   //   var hardcodedUrl = 'http://gsgusev.ru/scripts/kino_lumen.php'

  //   //   getJSON(hardcodedUrl, function (err, data) {
  //   //     var scheduleBlock = document.getElementById('schedule-block')
  //   //     var errorMessage = '<p> Не удалось загрузить расписание... </p> <h2 class="gs-well_margin-remove"> <i class="gs-icon-frown"> </i> </h2> <p> Попробуйте зайти позже или просто <br> <a href="https://vk.com/vadimcpp"> напишите программисту </a> </p>'

  //   //     if (err !== null) {
  //   //       console.error('Что-то пошло не так: ' + err)
  //   //       scheduleBlock.innerHTML = errorMessage
  //   //     } else if (data.constructor === Array && data.length) {
  //   //       console.log('Получили такие значения: ' + JSON.stringify(data))
  //   //       processImagesList(data)
  //   //     } else {
  //   //       console.error('Что-то пошло не так: в ответе от сервера ожидается непостой массив ссылок.')
  //   //       scheduleBlock.innerHTML = errorMessage
  //   //     }
  //   //   })
  //   // }

  //   // loadImagesList()
  // }
}
</script>

<style lang="scss" scoped>

@import '../assets/scss/kino-lumen.scss';

iframe, object, embed {
    max-width: 100%;
    width: 100%;
    height: 500px;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

</style>
