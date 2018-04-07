<template>
  <div class="bus-poselok-gusev">

    <!-- Breadcrumb -->
    <section class="gs-container gs-container_center">
        <ol class="gs-breadcrumb">
            <li class="gs-breadcrumb__list-item"> <router-link class="gs-breadcrumb__link" :to="{ name: 'Home' }"> GS Гусев </router-link> </li>
            <li class="gs-breadcrumb__list-item gs-breadcrumb__list-item_active"> Поселок-Гусев </li>
        </ol>
    </section>

    <!-- Well -->
    <section class="gs-container gs-container_center">
        <p class="gs-well">
            Автобусы идут от остановки "Дачная 2" в сторону города.
        </p>
    </section>

    <!-- Table -->
    <transition name="fade" appear>
        <section class="gs-container gs-container_center gs-container_padding-bottom">
            <div class="gs-well">
                <table class="gs-table gs-table-fixed-header" id="gs-table-fixed">
                    <thead>
                        <tr>
                            <th class="gs-table_text-center" colspan="2">
                                <span class="gs-table__thead_hidden-small-text">Расписание автобуса 2,5 (п.Северный - ул.Луговая)</span>
                                <span class="gs-table__thead_visible-small-text">Расписание автобуса 2,5</span>
                            </th>
                        </tr>
                    </thead>
                    <tfoot>
                    <tr> <td colspan="2"> * - до школы </td>
                    </tr>
                    <tr> <td colspan="2"> ** - до "Кулинарии" </td>
                    </tr>
                    <tr> <td colspan="2"> *** - до "Площади" </td>
                    </tr>
                    </tfoot>
                    <tbody>
                        <tr class="gs-table_text-left">
                            <td width="50%">Будние дни</td>
                            <td width="50%">
                                <span class="gs-table__thead_hidden-small-text">Выходные, каникулы, праздничные дни</span>
                                <span class="gs-table__thead_visible-small-text">Выходные дни</span>
                            </td>
                        </tr>
                        <tr class="gs-table_text-left">
                             <td width="50%">7:14</td>
                             <td width="50%">7:14</td>
                        </tr>
                        <tr class="gs-table_text-left">
                             <td width="50%">08:04*</td>
                             <td width="50%">08:04</td>
                        </tr>
                        <tr class="gs-table_text-left">
                             <td width="50%">09:49**</td>
                             <td width="50%">09:39**</td>
                        </tr>
                        <tr class="gs-table_text-left">
                             <td width="50%">12:42</td>
                             <td width="50%">12:42</td>
                        </tr>
                        <tr class="gs-table_text-left">
                             <td width="50%">14:28</td>
                             <td width="50%">14:28</td>
                        </tr>
                        <tr class="gs-table_text-left">
                             <td width="50%">15:30</td>
                             <td width="50%">-</td>
                        </tr>
                        <tr class="gs-table_text-left">
                             <td width="50%">16:29***</td>
                             <td width="50%">-</td>
                        </tr>
                        <tr class="gs-table_text-left">
                             <td width="50%">18:31</td>
                             <td width="50%">18:31</td>
                        </tr>
                        <tr class="gs-table_text-left">
                             <td width="50%">19:23</td>
                             <td width="50%">19:23</td>
                        </tr>
                    </tbody>
                </table>
                <TableFixedTHead/>
            </div>
        </section>
    </transition>

  </div>
</template>

<script>

import TableFixedTHead from '../components/TableFixedTHead'

export default {
  name: 'BusPoselokGusev',
  components: {
    TableFixedTHead
  }
}
</script>

<style lang="scss" scoped>

@import '../assets/scss/bus-poselok-gusev.scss';

.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

</style>
