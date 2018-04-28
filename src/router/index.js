import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import About from '@/views/About'
import AdminPoselka from '@/views/AdminPoselka'
import BusGusevKgd from '@/views/BusGusevKgd'
import BusGusevPoselok from '@/views/BusGusevPoselok'
import BusKgdGusev from '@/views/BusKgdGusev'
import BusPoselokGusev from '@/views/BusPoselokGusev'
import Voda from '@/views/Voda'
import KinoLumen from '@/views/KinoLumen'
import KartaPoselka from '@/views/KartaPoselka'
import TaxiVGuseve from '@/views/TaxiVGuseve'
import TaxiVKaliningrade from '@/views/TaxiVKaliningrade'
import GusevFok from '@/views/GusevFok'
import Kebab from '@/views/Kebab'
import FusionExpress from '@/views/FusionExpress'
import LabirintAnticafe from '@/views/LabirintAnticafe'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      alias: ['/gsv', '/kgd'],
      name: 'Home',
      component: Home,
      meta: {
        title: 'GS Гусев - Главная'
      }
    },
    {
      path: '/:city/about',
      name: 'About',
      component: About,
      meta: {
        title: 'About'
      }
    },
    {
      path: '/:city/admin_poselka',
      name: 'AdminPoselka',
      component: AdminPoselka,
      meta: {
        title: 'GS Гусев - Администратор поселка'
      }
    },
    {
      path: '/:city/bus_gusev_kgd',
      name: 'BusGusevKgd',
      component: BusGusevKgd,
      meta: {
        title: 'GS Гусев - Гусев-Калининград'
      }
    },
    {
      path: '/:city/bus_gusev_poselok',
      name: 'BusGusevPoselok',
      component: BusGusevPoselok,
      meta: {
        title: 'GS Гусев - Гусев-Поселок'
      }
    },
    {
      path: '/:city/bus_kgd_gusev',
      name: 'BusKgdGusev',
      component: BusKgdGusev,
      meta: {
        title: 'GS Гусев - Калининград-Гусев'
      }
    },
    {
      path: '/:city/bus_poselok_gusev',
      name: 'BusPoselokGusev',
      component: BusPoselokGusev,
      meta: {
        title: 'GS Гусев - Поселок-Гусев'
      }
    },
    {
      path: '/:city/voda',
      name: 'Voda',
      component: Voda,
      meta: {
        title: 'GS Гусев - Заказ воды «Айсберг»'
      }
    },
    {
      path: '/:city/kino_lumen',
      name: 'KinoLumen',
      component: KinoLumen,
      meta: {
        title: 'GS Гусев - Кино «Люмен Фильм»'
      }
    },
    {
      path: '/:city/karta_poselka',
      name: 'KartaPoselka',
      component: KartaPoselka,
      meta: {
        title: 'GS Гусев - Карта поселка'
      }
    },
    {
      path: '/:city/taxi_v_guseve',
      name: 'TaxiVGuseve',
      component: TaxiVGuseve,
      meta: {
        title: 'GS Гусев - Такси в Гусеве'
      }
    },
    {
      path: '/:city/taxi-v-kaliningrade',
      name: 'TaxiVKaliningrade',
      component: TaxiVKaliningrade,
      meta: {
        title: 'GS Гусев - Такси в Калининграде'
      }
    },
    {
      path: '/:city/gusev_fok',
      name: 'GusevFok',
      component: GusevFok,
      meta: {
        title: 'GS Гусев - ФОК города Гусева'
      }
    },
    {
      path: '/:city/kebab',
      name: 'Kebab',
      component: Kebab,
      meta: {
        title: 'GS Гусев - Кафе #КЕБАБ'
      }
    },
    {
      path: '/:city/fusion_express',
      name: 'FusionExpress',
      component: FusionExpress,
      meta: {
        title: 'GS Гусев - Кафе «Фьюжн экспресс»'
      }
    },
    {
      path: '/:city/labirint_anticafe',
      name: 'LabirintAnticafe',
      component: LabirintAnticafe,
      meta: {
        title: 'GS Гусев - Антикафе «Лабиринт»'
      }
    },
    {
      path: '*',
      redirect: { name: 'Home' }
    }
  ]
})

router.beforeEach((to, from, next) => {
  // Switch router city parameter
  var city = localStorage.getItem('city')

  if (city !== null && city.length > 0) {
    switch (city) {
      case 'kaliningrad':
        to.params.city = 'kgd'
        break
      case 'gusev':
        to.params.city = 'gsv'
        break
    }
  } else {
    if (to.params.city === null || to.params.city.length < 1) {
      to.params.city = 'gsv'
    }
  }

  // Set page title
  document.title = to.meta.title
  next()
})

export default router
