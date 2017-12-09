<template>
  <div class="home">
    <p>Тут будет навигация breadcrumbs</p>
    <ul>
      <li v-for="page in pages">
        <router-link :to=page.route> {{ page.name }} </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      pages: [
        { route: '1', name: 'Автобус Гусев-Калининград' },
        { route: '2', name: 'Автобус Калининград-Гусев ' },
        { route: '3', name: 'Автобус Гусев-Поселок' },
        { route: '4', name: 'Автобус Поселок-Гусев' },
        { route: '5', name: 'Администратор поселка' },
        { route: '6', name: 'Заказ воды «Айсберг»' },
        { route: '7', name: 'Кино «Люмен Фильм»' },
        { route: '8', name: 'Карта поселка' },
        { route: '9', name: 'Такси в Гусеве' },
        { route: '10', name: 'Такси в Калининграде' },
        { route: '11', name: 'Перевозка ваших вещей' },
        { route: '12', name: 'ФОК города Гусева' },
        { route: '13', name: 'Кафе #КЕБАБ' },
        { route: '14', name: 'Кафе «Фьюжн экспресс»' },
        { route: '15', name: 'О нас' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>


// 
// Тут есть поддержка стилей sass!
//

@mixin list-style() {
  list-style-type: none;
  padding: 0;
}

ul {
  @include list-style();
}
li {
  margin: 0 10px;
}

a {
  color: #35495E;
}
</style>
