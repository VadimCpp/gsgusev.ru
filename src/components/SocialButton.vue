<template>
  <a :href="url" class="gs-social-button">      
      ВКонтакте
  </a>
</template>

<script>

export default {
  name: 'SocialButton',
  props: [
    'vk'
  ],
  data: function () {
    return {
      'url': this.vk
    }
  }
}
</script>

<style lang="scss" scoped>

@import '../assets/scss/taxi-v-kaliningrade.scss';

</style>
