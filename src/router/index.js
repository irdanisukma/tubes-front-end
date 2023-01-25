import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

import barulagi from '../views/barulagi.vue'
import tabel from '../views/tabel.vue'
import ngetes from '../views/ngetes.vue'
import masukan from '../views/masukan.vue'
import kolom from '../views/kolom.vue'
import cari from '../views/cari.vue'
import update from '../views/update.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/updateadmin/:id',
      name: 'update',
      component: update
    },
    {
      path: '/cari',
      name: 'cari',
      component: cari
    },
    {
      path: '/kolom/:id',
      name: 'kolom',
      component: kolom
    },
    {
      path: '/masukan',
      name: 'masukan',
      component: masukan
    },
    {
      path: '/ngetes',
      name: 'ngetes',
      component: ngetes
    },
    {
      path: '/tabel',
      name: 'tabel',
      component: tabel
    },
    
   
    {
      path: '/barulagi',
      name: 'barulagi',
      component: barulagi
    },
    {
      path: '/about',
      name: 'about',
      
      
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
    
  ]
})

export default router
