<template>
  <a :href="url" class="gs-call-button">
      <i class="gs-icon-phone"> </i>
      Позвонить
  </a>
</template>

<script>

export default {
  name: 'CallButton',
  props: [
    'phone'
  ],
  data: function () {
    return {
      'url': 'tel:' + this.phone
    }
  }
}
</script>

<style scoped>

</style>
