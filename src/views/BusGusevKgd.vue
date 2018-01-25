<template>
  <div class="bus-gusev-kgd">

    <!-- Breadcrumb -->
    <section class="gs-container gs-container_center">
        <ol class="gs-breadcrumb">
            <li class="gs-breadcrumb__list-item"> <router-link class="gs-breadcrumb__link" :to="{ name: 'Home' }"> GS Гусев </router-link> </li>
            <li class="gs-breadcrumb__list-item gs-breadcrumb__list-item_active"> Гусев-Калининград </li>
        </ol>
    </section>

    <!-- Well -->
    <section class="gs-container gs-container_center">
        <div class="gs-well">
            <p>
                Автобусы в Калининград ходят часто, самые популярные маршруты мы привели в таблице ниже.
                                
            </p>
            <p>
                <b>Внимание!</b> Внезапный приток пассажиров. На кассах очереди. Введены дополнительные рейсы. 
            </p>
            <hr>
            <p class="gs-well_text-center">
                У вас есть возможность <br>
                <a href="http://avtovokzal39.ru/xml2/search.php">купить билет онлайн</a>* <br>
            </p>
            <small>
                <ul> 
                    <li> билет обязательно распечатать </li>
                    <li> печать на автовокзале стоит 10 <i class="gs-icon-rouble"></i></li>
                    <li> на доп. рейсы билеты не продаются</li>
                </ul>
            </small>
        </div>
    </section>

    <!-- Table -->
    <section class="gs-container gs-container_center">
        <div class="gs-well">
            <table class="gs-table">
                <thead>
                    <tr>
                        <th class="gs-table_text-center">
                            <span class="gs-table__thead_hidden-small-text">Номер автобуса</span>
                            <span class="gs-table__thead_visible-small-text">Автобус</span>
                        </th>
                        <th class="gs-table_text-center">
                            <span class="gs-table__thead_hidden-small-text">Отправление</span>
                            <span class="gs-table__thead_visible-small-text">Отпр.</span>
                        </th>
                        <th class="gs-table_text-center">
                            <span class="gs-table__thead_hidden-small-text">Прибытие</span>
                            <span class="gs-table__thead_visible-small-text">Приб.</span>
                        </th>
                        <th class="gs-table_text-center">
                            <span class="gs-table__thead_hidden-small-text">Цена, <i class="gs-icon-rouble"></i></span>
                            <span class="gs-table__thead_visible-small-text">Цена</span>
                        </th>
                    </tr>
                </thead>
                <tfoot>
                    <tr> <td colspan="4"> * - только по воскресеньям </td>
                    </tr>
                    <tr> <td colspan="4"> ** - большой и, возможно, комфортный </td>
                    </tr>
                </tfoot>
                <tbody>
                    <tr class="gs-table_text-center" v-for="record in schedule">
                        <td> {{ record.busNo }} </td>
                        <td> {{ record.departure }} </td>
                        <td> {{ record.arrival }} </td>
                        <td> {{ record.price }} </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </section>

    <!-- Well -->
    <section class="gs-container gs-container_center">
        <p class="gs-well">
            Все автобусы отправляются с автовокзала в Гусеве и прибывают на автовокзал в Калининграде.
            Посмотреть все маршруты из Гусева можно <a href="http://avtovokzal39.ru/asgusev.html"target="_blank">здесь</a>.
            Если у вас остались вопросы, вот вам телефон автовокзала в Гусеве.
        </p>
    </section>

    <!-- Thumbnail -->
    <section class="gs-container gs-container_center gs-container_padding-bottom">
        <div class="gs-thumbnail">
            <div class="gs-thumbnail__caption gs-thumbnail__caption_text-center">
                <h4>АС Гусев</h4>
                <p>8 (40143) 3-25-21</p>
                <CallButton phone="84014332521"/>
            </div>
        </div>
    </section>

  </div>
</template>

<script>

import CallButton from '../components/CallButton'

export default {
  name: 'BusGusevKgd',
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
  data: function () {
    return {
      schedule: [
        { busNo: '580', departure: '05:00', arrival: '07:30', price: '190' },
        { busNo: '680э', departure: '05:25', arrival: '07:30', price: '200' },
        { busNo: '680э', departure: '05:50', arrival: '07:55', price: '200' },
        { busNo: '680э', departure: '06:20', arrival: '08:25', price: '200' },
        { busNo: '680э', departure: '06:40', arrival: '08:45', price: '200' },
        { busNo: '680э', departure: '07:00', arrival: '09:05', price: '200' },
        { busNo: '583', departure: '07:30', arrival: '10:02', price: '190' },
        { busNo: '680э', departure: '07:50', arrival: '09:55', price: '200' },
        { busNo: '680э', departure: '08:20', arrival: '10:25', price: '200' },
        { busNo: '526', departure: '08:35', arrival: '11:33', price: '190' },
        { busNo: '680э', departure: '09:10', arrival: '11:15', price: '200' },
        { busNo: '583', departure: '09:35', arrival: '12:07', price: '190' },
        { busNo: '680э', departure: '10:00', arrival: '12:05', price: '200' },
        { busNo: '680э', departure: '10:25', arrival: '12:30', price: '200' },
        { busNo: '583', departure: '10:50', arrival: '13:22', price: '190' },
        { busNo: '680э', departure: '11:15', arrival: '13:20', price: '200' },
        { busNo: '680э', departure: '11:35', arrival: '13:40', price: '200' },
        { busNo: '680э', departure: '12:05', arrival: '14:10', price: '200' },
        { busNo: '680э', departure: '12:30', arrival: '14:35', price: '200' },
        { busNo: '680э', departure: '12:55', arrival: '15:00', price: '200' },
        { busNo: '680э', departure: '13:45', arrival: '15:50', price: '200' },
        { busNo: '581', departure: '14:00', arrival: '16:30', price: '190' },
        { busNo: '680э', departure: '14:25', arrival: '16:30', price: '200' },
        { busNo: '680э', departure: '15:00', arrival: '17:05', price: '200' },
        { busNo: '680э', departure: '15:25', arrival: '17:30', price: '200' },
        { busNo: '526', departure: '15:40', arrival: '18:38', price: '190' },
        { busNo: '680э', departure: '16:15', arrival: '18:20', price: '200' },
        { busNo: '580', departure: '17:10', arrival: '19:40', price: '190' },
        { busNo: '680э', departure: '17:45', arrival: '19:50', price: '200' },
        { busNo: '680э*', departure: '18:00', arrival: '20:05', price: '200' },
        { busNo: '583', departure: '18:25', arrival: '20:57', price: '190' },
        { busNo: '680э**', departure: '19:15', arrival: '21:20', price: '200' }
      ]
    }
  },
  components: {
    CallButton
  }
}
</script>

<style lang="scss" scoped>

@import '../assets/scss/bus-gusev-kgd.scss';

</style>
