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
                    <tr class="gs-table_text-center">
                        <td>580</td>
                        <td>05:00</td>
                        <td>07:30</td>
                        <td>170</td>
                    </tr>
                    <tr class="gs-table_text-center">
                        <td>680э</td>
                        <td>05:25</td>
                        <td>07:30</td>
                        <td>180</td>
                    </tr>
                    <tr class="gs-table_text-center">
                        <td>680э</td>
                        <td>05:50</td>
                        <td>07:55</td>
                        <td>180</td>
                    </tr>
                    <tr class="gs-table_text-center">
                        <td>680э</td>
                        <td>06:20</td>
                        <td>08:25</td>
                        <td>180</td>
                    </tr>
                    <tr class="gs-table_text-center">
                        <td>680э</td>
                        <td>06:40</td>
                        <td>08:45</td>
                        <td>180</td>
                    </tr>
                    <tr class="gs-table_text-center">
                        <td>680э</td>
                        <td>07:00</td>
                        <td>09:05</td>
                        <td>180</td>
                    </tr>
                    <tr class="gs-table_text-center">
                        <td>583</td>
                        <td>07:30</td>
                        <td>10:02</td>
                        <td>170</td>
                    </tr>
                    <tr class="gs-table_text-center">
                        <td>680э</td>
                        <td>07:50</td>
                        <td>09:55</td>
                        <td>180</td>
                    </tr>
                    <tr class="gs-table_text-center">
                        <td>680э</td>
                        <td>08:20</td>
                        <td>10:25</td>
                        <td>180</td>
                    </tr>
                    <tr class="gs-table_text-center">
                        <td>526</td>
                        <td>08:35</td>
                        <td>11:33</td>
                        <td>170</td>
                    </tr>
                    <tr class="gs-table_text-center">
                        <td>680э</td>
                        <td>09:10</td>
                        <td>11:15</td>
                        <td>180</td>
                    </tr>
                    <tr class="gs-table_text-center">
                        <td>583</td>
                        <td>09:35</td>
                        <td>12:07</td>
                        <td>170</td>
                    </tr>
                    <tr class="gs-table_text-center">
                        <td>680э</td>
                        <td>10:00</td>
                        <td>12:05</td>
                        <td>180</td>
                    </tr>
                    <tr class="gs-table_text-center">
                        <td>680э</td>
                        <td>10:25</td>
                        <td>12:30</td>
                        <td>180</td>
                    </tr>
                    <tr class="gs-table_text-center">
                        <td>583</td>
                        <td>10:50</td>
                        <td>13:22</td>
                        <td>170</td>
                    </tr>
                    <tr class="gs-table_text-center">
                        <td>680э</td>
                        <td>11:15</td>
                        <td>13:20</td>
                        <td>180</td>
                    </tr>
                    <tr class="gs-table_text-center">
                        <td>680э</td>
                        <td>11:35</td>
                        <td>13:40</td>
                        <td>180</td>
                    </tr>
                    <tr class="gs-table_text-center">
                        <td>680э</td>
                        <td>12:05</td>
                        <td>14:10</td>
                        <td>180</td>
                    </tr>
                    <tr class="gs-table_text-center">
                        <td>680э</td>
                        <td>12:30</td>
                        <td>14:35</td>
                        <td>180</td>
                    </tr>
                    <tr class="gs-table_text-center">
                        <td>680э</td>
                        <td>12:55</td>
                        <td>15:00</td>
                        <td>180</td>
                    </tr>
                    <tr class="gs-table_text-center">
                        <td>680э</td>
                        <td>13:45</td>
                        <td>15:50</td>
                        <td>180</td>
                    </tr>
                    <tr class="gs-table_text-center">
                        <td>581</td>
                        <td>14:00</td>
                        <td>16:30</td>
                        <td>170</td>
                    </tr>
                    <tr class="gs-table_text-center">
                        <td>680э</td>
                        <td>14:25</td>
                        <td>16:30</td>
                        <td>180</td>
                    </tr>
                    <tr class="gs-table_text-center">
                        <td>680э</td>
                        <td>15:00</td>
                        <td>17:05</td>
                        <td>180</td>
                    </tr>
                    <tr class="gs-table_text-center">
                        <td>680э</td>
                        <td>15:25</td>
                        <td>17:30</td>
                        <td>180</td>
                    </tr>
                    <tr class="gs-table_text-center">
                        <td>526</td>
                        <td>15:40</td>
                        <td>18:38</td>
                        <td>170</td>
                    </tr>
                    <tr class="gs-table_text-center">
                        <td>680э</td>
                        <td>16:15</td>
                        <td>18:20</td>
                        <td>180</td>
                    </tr>
                    <tr class="gs-table_text-center">
                        <td>580</td>
                        <td>17:10</td>
                        <td>19:40</td>
                        <td>170</td>
                    </tr>
                    <tr class="gs-table_text-center">
                        <td>680э</td>
                        <td>17:45</td>
                        <td>19:50</td>
                        <td>180</td>
                    </tr>
                    <tr class="gs-table_text-center">
                        <td>680э*</td>
                        <td>18:00</td>
                        <td>20:05</td>
                        <td>180</td>
                    </tr>
                    <tr class="gs-table_text-center">
                        <td>583</td>
                        <td>18:25</td>
                        <td>20:57</td>
                        <td>170</td>
                    </tr>
                    <tr class="gs-table_text-center">
                        <td>680э**</td>
                        <td>19:15</td>
                        <td>21:20</td>
                        <td>180</td>
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
                <a href="tel:84014332521" class="gs-call-button">
                    <i class="gs-icon-phone"> </i>
                    Позвонить
                </a>
            </div>
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
  }
}
</script>

<style lang="scss" scoped>

@import '../assets/scss/bus-gusev-kgd.scss';

</style>
