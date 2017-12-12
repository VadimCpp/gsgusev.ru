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
                    <tr class="gs-table_text-center">
                        <td>526</td>
                        <td>07:10</td>
                        <td>09:45</td>
                        <td>170</td>
                    </tr>
                    <tr class="gs-table_text-center">
                        <td>583</td>
                        <td>08:00</td>
                        <td>10:35</td>
                        <td>170</td>
                    </tr>
                    <tr class="gs-table_text-center">
                        <td>680э</td>
                        <td>08:25</td>
                        <td>10:35</td>
                        <td>180</td>
                    </tr>
                    <tr class="gs-table_text-center">
                        <td>680э</td>
                        <td>08:50</td>
                        <td>11:00</td>
                        <td>180</td>
                    </tr>
                    <tr class="gs-table_text-center">
                        <td>680э</td>
                        <td>09:25</td>
                        <td>11:35</td>
                        <td>180</td>
                    </tr>
                    <tr class="gs-table_text-center">
                        <td>583</td>
                        <td>09:45</td>
                        <td>12:20</td>
                        <td>170</td>
                    </tr>
                    <tr class="gs-table_text-center">
                        <td>680э</td>
                        <td>10:20</td>
                        <td>12:30</td>
                        <td>180</td>
                    </tr>
                    <tr class="gs-table_text-center">
                        <td>680э</td>
                        <td>10:50</td>
                        <td>13:00</td>
                        <td>180</td>
                    </tr>
                    <tr class="gs-table_text-center">
                        <td>680э</td>
                        <td>11:20</td>
                        <td>13:30</td>
                        <td>180</td>
                    </tr>
                    <tr class="gs-table_text-center">
                        <td>583</td>
                        <td>11:50</td>
                        <td>14:25</td>
                        <td>170</td>
                    </tr>
                    <tr class="gs-table_text-center">
                        <td>680э</td>
                        <td>12:10</td>
                        <td>14:20</td>
                        <td>180</td>
                    </tr>
                    <tr class="gs-table_text-center">
                        <td>680э</td>
                        <td>12:30</td>
                        <td>14:40</td>
                        <td>180</td>
                    </tr>
                    <tr class="gs-table_text-center">
                        <td>680э</td>
                        <td>12:55</td>
                        <td>15:05</td>
                        <td>180</td>
                    </tr>
                    <tr class="gs-table_text-center">
                        <td>680э</td>
                        <td>13:25</td>
                        <td>15:35</td>
                        <td>180</td>
                    </tr>
                    <tr class="gs-table_text-center">
                        <td>680э</td>
                        <td>13:50</td>
                        <td>16:00</td>
                        <td>180</td>
                    </tr>
                    <tr class="gs-table_text-center">
                        <td>583</td>
                        <td>14:20</td>
                        <td>16:55</td>
                        <td>170</td>
                    </tr>
                    <tr class="gs-table_text-center">
                        <td>680э</td>
                        <td>14:40</td>
                        <td>16:50</td>
                        <td>180</td>
                    </tr>
                    <tr class="gs-table_text-center">
                        <td>680э</td>
                        <td>15:05</td>
                        <td>17:15</td>
                        <td>180</td>
                    </tr>
                    <tr class="gs-table_text-center">
                        <td>680э</td>
                        <td>15:30</td>
                        <td>17:40</td>
                        <td>180</td>
                    </tr>
                    <tr class="gs-table_text-center">
                        <td>526</td>
                        <td>15:50</td>
                        <td>18:25</td>
                        <td>170</td>
                    </tr>
                    <tr class="gs-table_text-center">
                        <td>680э</td>
                        <td>16:45</td>
                        <td>18:55</td>
                        <td>180</td>
                    </tr>
                    <tr class="gs-table_text-center">
                        <td>680э</td>
                        <td>17:10</td>
                        <td>19:20</td>
                        <td>180</td>
                    </tr>
                    <tr class="gs-table_text-center">
                        <td>580</td>
                        <td>17:35</td>
                        <td>19:55</td>
                        <td>170</td>
                    </tr>
                    <tr class="gs-table_text-center">
                        <td>680э</td>
                        <td>18:00</td>
                        <td>20:10</td>
                        <td>180</td>
                    </tr>
                    <tr class="gs-table_text-center">
                        <td>680э</td>
                        <td>18:25</td>
                        <td>20:35</td>
                        <td>180</td>
                    </tr>
                    <tr class="gs-table_text-center">
                        <td>680э</td>
                        <td>19:15</td>
                        <td>21:25</td>
                        <td>180</td>
                    </tr>
                    <tr class="gs-table_text-center">
                        <td>680э</td>
                        <td>19:30</td>
                        <td>21:40</td>
                        <td>180</td>
                    </tr>
                    <tr class="gs-table_text-center">
                        <td>680э</td>
                        <td>20:30</td>
                        <td>22:40</td>
                        <td>180</td>
                    </tr>
                    <tr class="gs-table_text-center">
                        <td>680э**</td>
                        <td>21:00</td>
                        <td>23:10</td>
                        <td>180</td>
                    </tr>
                    <tr class="gs-table_text-center">
                        <td>580**</td>
                        <td>21:40</td>
                        <td>24:00</td>
                        <td>170</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </section>

  </div>
</template>

<script>
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
  render () {
  }
}
</script>

<style lang="scss" scoped>

@import '../assets/scss/bus-gusev-kgd.scss';

</style>
