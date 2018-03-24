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
    },
    {
      path: '/bus_gusev_kgd',
      name: 'BusGusevKgd',
      component: BusGusevKgd,
      props: {
        title: 'GS Гусев - Гусев-Калининград'
      }
    },
    {
      path: '/bus_gusev_poselok',
      name: 'BusGusevPoselok',
      component: BusGusevPoselok,
      props: {
        title: 'GS Гусев - Гусев-Поселок'
      }
    },
    {
      path: '/bus_kgd_gusev',
      name: 'BusKgdGusev',
      component: BusKgdGusev,
      props: {
        title: 'GS Гусев - Калининград-Гусев'
      }
    },
    {
      path: '/bus_poselok_gusev',
      name: 'BusPoselokGusev',
      component: BusPoselokGusev,
      props: {
        title: 'GS Гусев - Поселок-Гусев'
      }
    },
    {
      path: '/voda',
      name: 'Voda',
      component: Voda,
      props: {
        title: 'GS Гусев - Заказ воды «Айсберг»'
      }
    },
    {
      path: '/kino_lumen',
      name: 'KinoLumen',
      component: KinoLumen,
      props: {
        title: 'GS Гусев - Кино «Люмен Фильм»'
      }
    },
    {
      path: '/karta_poselka',
      name: 'KartaPoselka',
      component: KartaPoselka,
      props: {
        title: 'GS Гусев - Карта поселка'
      }
    },
    {
      path: '/taxi_v_guseve',
      name: 'TaxiVGuseve',
      component: TaxiVGuseve,
      props: {
        title: 'GS Гусев - Такси в Гусеве'
      }
    },
    {
      path: '/taxi-v-kaliningrade',
      name: 'TaxiVKaliningrade',
      component: TaxiVKaliningrade,
      props: {
        title: 'GS Гусев - Такси в Калининграде'
      }
    },
    {
      path: '/perevozka_divana',
      name: 'PerevozkaDivana',
      component: PerevozkaDivana,
      props: {
        title: 'GS Гусев - Перевозка ваших вещей'
      }
    },
    {
      path: '/gusev_fok',
      name: 'GusevFok',
      component: GusevFok,
      props: {
        title: 'GS Гусев - ФОК города Гусева'
      }
    },
    {
      path: '/kebab',
      name: 'Kebab',
      component: Kebab,
      props: {
        title: 'GS Гусев - Кафе #КЕБАБ'
      }
    },
    {
      path: '/fusion_express',
      name: 'FusionExpress',
      component: FusionExpress,
      props: {
        title: 'GS Гусев - Кафе «Фьюжн экспресс»'
      }
    },
    {
      path: '/labirint_anticafe',
      name: 'LabirintAnticafe',
      component: LabirintAnticafe,
      props: {
        title: 'GS Гусев - Антикафе «Лабиринт»'
      }
    }
  ]
})
