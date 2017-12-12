import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import About from '@/components/About'
import AdminPoselka from '@/components/AdminPoselka'

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
    },
    {
      path: '/admin_poselka',
      name: 'AdminPoselka',
      component: AdminPoselka,
      props: {
        title: 'GS Гусев - Администратор поселка'
      }
    }
  ]
})
