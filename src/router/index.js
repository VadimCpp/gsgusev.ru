import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import About from '@/components/About'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      props: {
        title: 'GS Гусев - Главная'
      }
    },
    {
      path: '/about',
      name: 'About',
      component: About,
      props: {
        title: 'GS Гусев - О нас'
      }
    }
  ]
})
