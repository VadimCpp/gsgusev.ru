<template>
  <div class="home">
    <p>Тут будет навигация breadcrumbs</p>
    <ul>
      <li><router-link to="bus">1</router-link></li>
      <li><router-link to="taxi">2</router-link></li>
      <li><router-link to="administrator">3</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 0 10px;
}

a {
  color: #35495E;
}
</style>
