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
import PerevozkaDivana from '@/views/PerevozkaDivana'
import GusevFok from '@/views/GusevFok'
import Kebab from '@/views/Kebab'
import FusionExpress from '@/views/FusionExpress'
import LabirintAnticafe from '@/views/LabirintAnticafe'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        title: 'GS Гусев - Главная'
      }
    },
    {
      path: '/about',
      name: 'About',
      component: About,
      meta: {
        title: 'GS Гусев - О нас'
      }
    },
    {
      path: '/admin_poselka',
      name: 'AdminPoselka',
      component: AdminPoselka,
      meta: {
        title: 'GS Гусев - Администратор поселка'
      }
    },
    {
      path: '/bus_gusev_kgd',
      name: 'BusGusevKgd',
      component: BusGusevKgd,
      meta: {
        title: 'GS Гусев - Гусев-Калининград'
      }
    },
    {
      path: '/bus_gusev_poselok',
      name: 'BusGusevPoselok',
      component: BusGusevPoselok,
      meta: {
        title: 'GS Гусев - Гусев-Поселок'
      }
    },
    {
      path: '/bus_kgd_gusev',
      name: 'BusKgdGusev',
      component: BusKgdGusev,
      meta: {
        title: 'GS Гусев - Калининград-Гусев'
      }
    },
    {
      path: '/bus_poselok_gusev',
      name: 'BusPoselokGusev',
      component: BusPoselokGusev,
      meta: {
        title: 'GS Гусев - Поселок-Гусев'
      }
    },
    {
      path: '/voda',
      name: 'Voda',
      component: Voda,
      meta: {
        title: 'GS Гусев - Заказ воды «Айсберг»'
      }
    },
    {
      path: '/kino_lumen',
      name: 'KinoLumen',
      component: KinoLumen,
      meta: {
        title: 'GS Гусев - Кино «Люмен Фильм»'
      }
    },
    {
      path: '/karta_poselka',
      name: 'KartaPoselka',
      component: KartaPoselka,
      meta: {
        title: 'GS Гусев - Карта поселка'
      }
    },
    {
      path: '/taxi_v_guseve',
      name: 'TaxiVGuseve',
      component: TaxiVGuseve,
      meta: {
        title: 'GS Гусев - Такси в Гусеве'
      }
    },
    {
      path: '/taxi-v-kaliningrade',
      name: 'TaxiVKaliningrade',
      component: TaxiVKaliningrade,
      meta: {
        title: 'GS Гусев - Такси в Калининграде'
      }
    },
    {
      path: '/perevozka_divana',
      name: 'PerevozkaDivana',
      component: PerevozkaDivana,
      meta: {
        title: 'GS Гусев - Перевозка ваших вещей'
      }
    },
    {
      path: '/gusev_fok',
      name: 'GusevFok',
      component: GusevFok,
      meta: {
        title: 'GS Гусев - ФОК города Гусева'
      }
    },
    {
      path: '/kebab',
      name: 'Kebab',
      component: Kebab,
      meta: {
        title: 'GS Гусев - Кафе #КЕБАБ'
      }
    },
    {
      path: '/fusion_express',
      name: 'FusionExpress',
      component: FusionExpress,
      meta: {
        title: 'GS Гусев - Кафе «Фьюжн экспресс»'
      }
    },
    {
      path: '/labirint_anticafe',
      name: 'LabirintAnticafe',
      component: LabirintAnticafe,
      meta: {
        title: 'GS Гусев - Антикафе «Лабиринт»'
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})

export default router
