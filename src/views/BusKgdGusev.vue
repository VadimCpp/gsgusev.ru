<template>
  <div class="bus-kgd-gusev">

    <!-- Breadcrumb -->
    <section class="gs-container gs-container_center">
        <ol class="gs-breadcrumb">
            <li class="gs-breadcrumb__list-item"> <router-link class="gs-breadcrumb__link" :to="{ name: 'Home' }"> GS Гусев </router-link> </li>
            <li class="gs-breadcrumb__list-item gs-breadcrumb__list-item_active"> Калининград-Гусев </li>
        </ol>
    </section>

    <!-- Well -->
    <section class="gs-container gs-container_center">
        <div class="gs-well">
            <p>
                Автобусы в Гусев ходят часто. Расписание приведено в таблице ниже.
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
    <section class="gs-container gs-container_center gs-container_padding-bottom">
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
                    <tr>
                        <td colspan="4"> ** - большой и, возможно, комфортный </td>
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

  </div>
</template>

<script>

export default {
  name: 'BusKgdGusev',
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
        { busNo: '526', departure: '07:10', arrival: '09:45', price: '190' },
        { busNo: '583', departure: '08:00', arrival: '10:35', price: '190' },
        { busNo: '680э', departure: '08:25', arrival: '10:35', price: '200' },
        { busNo: '680э', departure: '08:50', arrival: '11:00', price: '200' },
        { busNo: '680э', departure: '09:25', arrival: '11:35', price: '200' },
        { busNo: '583', departure: '09:45', arrival: '12:20', price: '190' },
        { busNo: '680э', departure: '10:20', arrival: '12:30', price: '200' },
        { busNo: '680э', departure: '10:50', arrival: '13:00', price: '200' },
        { busNo: '680э', departure: '11:20', arrival: '13:30', price: '200' },
        { busNo: '583', departure: '11:50', arrival: '14:25', price: '190' },
        { busNo: '680э', departure: '12:10', arrival: '14:20', price: '200' },
        { busNo: '680э', departure: '12:30', arrival: '14:40', price: '200' },
        { busNo: '680э', departure: '12:55', arrival: '15:05', price: '200' },
        { busNo: '680э', departure: '13:25', arrival: '15:35', price: '200' },
        { busNo: '680э', departure: '13:50', arrival: '16:00', price: '200' },
        { busNo: '583', departure: '14:20', arrival: '16:55', price: '190' },
        { busNo: '680э', departure: '14:40', arrival: '16:50', price: '200' },
        { busNo: '680э', departure: '15:05', arrival: '17:15', price: '200' },
        { busNo: '680э', departure: '15:30', arrival: '17:40', price: '200' },
        { busNo: '526', departure: '15:50', arrival: '18:25', price: '190' },
        { busNo: '680э', departure: '16:45', arrival: '18:55', price: '200' },
        { busNo: '680э', departure: '17:10', arrival: '19:20', price: '200' },
        { busNo: '580', departure: '17:35', arrival: '19:55', price: '190' },
        { busNo: '680э', departure: '18:00', arrival: '20:10', price: '200' },
        { busNo: '680э', departure: '18:25', arrival: '20:35', price: '200' },
        { busNo: '680э', departure: '19:15', arrival: '21:25', price: '200' },
        { busNo: '680э', departure: '19:30', arrival: '21:40', price: '200' },
        { busNo: '680э', departure: '20:30', arrival: '22:40', price: '200' },
        { busNo: '680э**', departure: '21:00', arrival: '23:10', price: '200' },
        { busNo: '580**', departure: '21:40', arrival: '24:00', price: '190' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

@import '../assets/scss/bus-kgd-gusev.scss';

</style>
